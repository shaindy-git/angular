import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student, Years } from '../Student.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { APP_PROFESSIONS, Profession } from '../models/profession.model';
import { studentService } from '../student.service';

@Component({
  selector: 'app-studen-details-form',
  templateUrl: './studen-details-form.component.html',
  styleUrls: ['./studen-details-form.component.scss']
})
export class StudenDetailsFormComponent {

  dateDaysOfAbsence: string = "00/00/0000"
  numOfDaysDaysOfAbsence: number = 0
  sumOfDaysOfAbsence: number=0


  professionsList: Profession[] = APP_PROFESSIONS
  year = Years;
  private _student?: Student

  public get student(): Student | undefined {
    return this._student
  }


  @Input()
  public set student(value: Student | undefined) {
    this._student = value;
    if (this.student != undefined) {
      this.studentForm = new FormGroup({
        "id": new FormControl(this.student.id),
        "firstName": new FormControl(this.student.firstName, [Validators.required]),
        "lastName": new FormControl(this.student.lastName),
        "address": new FormControl(this.student.address),
        "phone": new FormControl(this.student.phone, [Validators.required, Validators.minLength(9), Validators.maxLength(10)]),
        "professions": new FormControl(this.student.professionId),
        "year": new FormControl(this.student.year),
        "testsList": new FormControl(this.student.testsList),
        "daysOfAbsence": new FormControl(this.student.daysOfAbsence),
        "date": new FormControl(),
        "numOfDays": new FormControl(Validators.maxLength(7))
      })
    }
  }

  @Output()
  onSaveNewStudent: EventEmitter<Student> = new EventEmitter();

  studentForm: FormGroup = new FormGroup({});




  @Output()
  onFirstFocus: EventEmitter<any> = new EventEmitter()
  firstFocudEmitted: boolean = false

  inputFocus() {
    if (!this.firstFocudEmitted) {
      this.onFirstFocus.emit()
      this.firstFocudEmitted = true

    }
  }

  saveNewStudent() {
    // this.student = this.studentForm.value;
    console.log(this.student);
    
    if(this.student){
      this.student.id = this.studentForm.value.id;
      this.student.address = this.studentForm.value.address;
      this.student.phone = this.studentForm.value.phone;
      this.student.professionId = this.studentForm.value.professions;
      this.student.year = this.studentForm.value.year;
      this.student.testsList = this.studentForm.value.testsList;
      this.student.daysOfAbsence ?.push({
        date: this.studentForm.value.date,
        numOfDays: this.studentForm.value.numOfDays});
    }
    
    console.log("Student Details Form: ", this.student)
    console.log(this.student?.daysOfAbsence);

    this.onSaveNewStudent.emit(this.student)
  }

  
  constructor(private _studentService:studentService) {
   
  }

  ngOnChanges() {
    if (this.student) {
      console.log("onChanges", this.student.id);
      
      this._studentService.sumOfDaysOfAbsence(this.student.id).then(sum => {
        this.sumOfDaysOfAbsence = sum;
      }).catch(err => {
        console.error(err);
        this.sumOfDaysOfAbsence = 0;
      });
    }
  }


}
