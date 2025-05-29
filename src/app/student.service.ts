import { Injectable } from "@angular/core";
import { Student } from "./Student.model";
import { DaysOfAbsence } from "./models/daysOfAbsence.model";


const STUDENTS = [{
    id: 1, firstName: "aaa", lastName: "aaa", address: "aaa", phone: "0548412052", active: true, avg: 80, testsList: [
        { id: 1, date: "20/02/2025", description: "test1", mark: 5 },
        { id: 2, date: "20/02/2025", description: "test1", mark: 5 }]
    , daysOfAbsence: []
},
{ id: 2, firstName: "bbb", lastName: "bbb", address: "bbb", phone: "0548412052", active: true, avg: 98, daysOfAbsence: [] },
{ id: 3, firstName: "ccc", lastName: "ccc", address: "ccc", phone: "0548412052", active: false, avg: 98, departureDate: "20-02-2025", daysOfAbsence: [] },
]



@Injectable()
export class studentService {


    getStudents(): Student[] {
        return STUDENTS;
    }


    getStudentSlowly(): Promise<Student[]> {
        return new Promise<Student[]>((res, rej) => {
            setTimeout(() => {
                res(STUDENTS);
            }, 3000);

        })

    }

    
    avgStudent(id: number): Promise<number> {
        console.log(id);

        let student = STUDENTS.filter(s => s.id === id)[0];

        return new Promise<number>((res, rej) => {
            if (!student) {
                rej("Student not found");
                return;
            }
            setTimeout(() => {
                res(student.avg);
            }, 3000);
        });
    }

    sumOfDaysOfAbsence(id: number): Promise<number> {
        console.log("sumOfDaysOfAbsence",id);

        let student = STUDENTS.filter(s => s.id === id)[0];

        return new Promise<number>((res, rej) => {
            if (!student) {
                rej("Student not found");
                return;
            }
            setTimeout(() => {
                let sum = 0;
                (student.daysOfAbsence as DaysOfAbsence[]).forEach(d => {
                    sum += d.numOfDays;
                });
                res(sum);
            },);
        });
    }

}
