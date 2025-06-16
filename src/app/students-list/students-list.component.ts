import { Component, EventEmitter, Output } from '@angular/core';
import { Student } from '../Student.model';
import { studentService } from '../student.service';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent {

  selectedStudent?: Student
  // students: Student[] = this._studentService.getStudents();
  students: Student[] = [];
  studentsAbsenceSum: { [id: number]: Promise<number> } = {};
  active: boolean = false;
  nameToFilter: string = '';




  @Output()
  selectedStudentToApp: EventEmitter<Student> = new EventEmitter<Student>();

  // students: Student[] = [
  //   { id: 1, firstName: "aaa", lastName: "aaa", address: "aaa", phone: "0548412052", active: true, avg: 80,testsList: [
  //     { id: 1, date: "20/02/2025", description: "test1", mark: 5 }]},
  //   { id: 2, firstName: "bbb", lastName: "bbb", address: "bbb", phone: "0548412052", active: true, avg: 98 },
  //   { id: 3, firstName: "ccc", lastName: "ccc", address: "ccc", phone: "0548412052", active: false, avg: 98, departureDate: "20-02-2025" },
  // ]


  selectStudent(studentToSelect: Student) {
    this.selectedStudentToApp.emit(studentToSelect);
  }

  deleteStudent(studentToDelete: Student) {
    this._studentService.deleteStudentFromServer(studentToDelete.id).subscribe({
      next: () => {
        let indexTodelete = this.students.indexOf(studentToDelete);
        this.students.splice(indexTodelete, 1)
      },
      error: (err) => {
        alert("Error deleting student: " + err.message);
      }
    })
    // let indexTodelete = this.students.indexOf(studentToDelete);
    // this.students.splice(indexTodelete, 1)
  }

  ShowDetails(studentToShow: Student) {
    this.selectedStudent = studentToShow
  }

  showNewStudentDetails() {
    this.selectedStudent = new Student("", "", "", "", 0)
  }

  saveStudentToList(studentToSave: Student): void | Promise<number> {
    if (studentToSave.id == 0) {
      studentToSave.id = this.students.length + 1;
      studentToSave.active = true;
      this._studentService.addStudentsFromServer(studentToSave).subscribe({
        next: () => {
          this.students.push(studentToSave);
          this.studentsAbsenceSum[studentToSave.id] = this._studentService.sumOfDaysOfAbsence(studentToSave.id);
          alert("Add")
          console.log(this.students);
        },
        error: (err) => {
          alert("Error adding student: " + err.message);
        }
      })
      // this.students.push(studentToSave);
      // alert("Add")
      // console.log(this.students);
      // this.studentsAbsenceSum[studentToSave.id] = this._studentService.sumOfDaysOfAbsence(studentToSave.id);
      this.selectedStudent = undefined;
      return;
    }
    else {
      let studenToUodate = this.students.filter(s => s.id == studentToSave.id)[0];
      let index = this.students.indexOf(studenToUodate);
      studentToSave.active = studenToUodate.active;
      studentToSave.avg = studenToUodate.avg
      this.students[index] = studentToSave;
      alert("Update")
      this.studentsAbsenceSum[studentToSave.id] = this._studentService.sumOfDaysOfAbsence(studentToSave.id);
      return this.studentsAbsenceSum[studentToSave.id];
    }
    this.selectedStudent = undefined;
  }



  getSumOfAbsence(student: Student): Promise<number> {
    return this.studentsAbsenceSum[student.id] ?? Promise.resolve(0);
  }
  FilteringAct(act: boolean) {
    this.active = act;
    this.Filtering(act, this.nameToFilter);
  }
  FilteringNAme(name: string) {
    if (name === this.nameToFilter) {
      return
    } 
    this.nameToFilter = name;
    this.Filtering(this.active, this.nameToFilter);
  }

  Filtering(act: boolean, name: string) {

    if (!name && !act) {
      return
    }
    this._studentService.getStudentsFromServer(act, name).subscribe({
      next: (students) => {
        console.log(students);
        this.students = students;
        students.forEach(student => {
          this.studentsAbsenceSum[student.id] = this._studentService.sumOfDaysOfAbsence(student.id);
        });
      },
      error: (err) => {
        console.error("Error fetching students:", err);
      }
    })
  }







  constructor(private _studentService: studentService) {
    // _studentService.getStudentSlowly().then((students)=>{
    //   this.students = students;
    // })

  }

  ngOnInit() {
    // this._studentService.getStudentSlowly().then((students) => {
    //   this.students = students;
    //   students.forEach(student => {
    //     this.studentsAbsenceSum[student.id] = this._studentService.sumOfDaysOfAbsence(student.id);
    //   });
    // });

    this._studentService.getStudentsFromServer(this.active, this.nameToFilter).subscribe({
      next: (students) => {
        this.students = students;
        students.forEach(student => {
          this.studentsAbsenceSum[student.id] = this._studentService.sumOfDaysOfAbsence(student.id);
        });
      },
      error: (err) => {
        console.error("Error fetching students:", err);
      }
    })


  }

  showHelp() {
    // alert("help")
  }

}
