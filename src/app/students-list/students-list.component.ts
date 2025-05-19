import { Component } from '@angular/core';
import { Student } from '../Student.model';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent {

  selectedStudent:Student|undefined

  students: Student[] = [
    { id: 1, firstName: "aaa", lastName: "aaa", address: "aaa", phone: "0548412052", active: true, avg: 80 },
    { id: 2, firstName: "bbb", lastName: "bbb", address: "bbb", phone: "0548412052", active: true, avg: 98 },
    { id: 3, firstName: "ccc", lastName: "ccc", address: "ccc", phone: "0548412052", active: false, avg: 98,departureDate:"20-02-2025" },

  ]

    addStudent(studentToAdd: Student){
    this.students.push(studentToAdd);
    this.selectedStudent=undefined;
  }

  showNewStudentDetails(){
    this.selectedStudent=new Student(  4,  "ccc",  "ccc",  "ccc", "0548412052",  true,  98 )
  }

  deleteStudent(studentToDelete: Student) {
    let indexTodelete = this.students.indexOf(studentToDelete);
    this.students.splice(indexTodelete, 1)
  }

  ShowDetails(studentToShow:Student){
    this.selectedStudent=studentToShow
  }

  showHelp(){
    alert("help")
  }

}
