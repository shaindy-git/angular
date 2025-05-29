import { Component, EventEmitter, Output } from '@angular/core';
import { Student } from '../Student.model';
import { studentService } from '../student.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent {

  selectedStudent?: Student
  // students: Student[] = this._studentService.getStudents();
  students: Student[] = [];

 

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
    let indexTodelete = this.students.indexOf(studentToDelete);
    this.students.splice(indexTodelete, 1)
  }

  ShowDetails(studentToShow: Student) {
    this.selectedStudent = studentToShow
  }

  showNewStudentDetails() {
    this.selectedStudent = new Student("", "", "", "", 0)
  }

  saveStudentToList(studentToSave: Student) {
    if (studentToSave.id == 0) {
      studentToSave.id = this.students.length + 1;
      studentToSave.active = true;
      this.students.push(studentToSave);
      alert("Add")
      console.log(this.students);

    }
    else {
      let studenToUodate = this.students.filter(s => s.id == studentToSave.id)[0];
      let index = this.students.indexOf(studenToUodate);
      studentToSave.active = studenToUodate.active;
      studentToSave.avg = studenToUodate.avg
      this.students[index] = studentToSave;
      alert("Update")
    }
    this.selectedStudent = undefined;
  }


  getSumOfAbsence(student: Student): Promise<number> {
  //   console.log(student.id);
    
  //  console.log(this._studentService.sumOfDaysOfAbsence(student.id));
    
  // return this._studentService.sumOfDaysOfAbsence(student.id);

  if (!this._studentService.SUMCACHE[student.id]) {
    this.sumCache[student.id] = this._studentService.sumOfDaysOfAbsence(student.id);
  }
  return this.sumCache[student.id];
}

  constructor(private _studentService: studentService) {
    // _studentService.getStudentSlowly().then((students)=>{
    //   this.students = students;
    // })

  }

  ngOnInit() {
    this._studentService.getStudentSlowly().then((students) => {
      this.students = students;
    })

  }
  showHelp() {
    // alert("help")
  }

}
