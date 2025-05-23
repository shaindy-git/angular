import { Component } from '@angular/core';
import { Student } from '../Student.model';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent {

  selectedStudent?: Student

  students: Student[] = [
    { id: 1, firstName: "aaa", lastName: "aaa", address: "aaa", phone: "0548412052", active: true, avg: 80 },
    { id: 2, firstName: "bbb", lastName: "bbb", address: "bbb", phone: "0548412052", active: true, avg: 98 },
    { id: 3, firstName: "ccc", lastName: "ccc", address: "ccc", phone: "0548412052", active: false, avg: 98, departureDate: "20-02-2025" },
  ]

  deleteStudent(studentToDelete: Student) {
    let indexTodelete = this.students.indexOf(studentToDelete);
    this.students.splice(indexTodelete, 1)
  }

   ShowDetails(studentToShow: Student) {
    this.selectedStudent = studentToShow
  }

   showNewStudentDetails() {
    this.selectedStudent = new Student( "", "", "", "", 0)
  }

  saveStudentToList(studentToSave: Student) {
    if (studentToSave.id == 0) {
      studentToSave.id = this.students.length + 1;
      studentToSave.active=true;
      this.students.push(studentToSave);
      alert("Add" )
    }
    else {
      let studenToUodate = this.students.filter(s => s.id == studentToSave.id)[0];
      let index = this.students.indexOf(studenToUodate);
      studentToSave.active=studenToUodate.active;
      studentToSave.avg=studenToUodate.avg
      this.students[index] = studentToSave;
      alert("Update" )
    }
    this.selectedStudent =undefined;
  }



  showHelp() {
    // alert("help")
  }

}
