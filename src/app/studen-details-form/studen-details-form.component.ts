import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student, Years } from '../Student.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { APP_PROFESSIONS, Profession } from '../models/profession.model';

@Component({
  selector: 'app-studen-details-form',
  templateUrl: './studen-details-form.component.html',
  styleUrls: ['./studen-details-form.component.scss']
})
export class StudenDetailsFormComponent {

  
  professionsList:Profession[]= APP_PROFESSIONS
  year=Years;
  private _student?: Student

  public get student(): Student | undefined {
    return this._student
  }

  
  @Input()
  public set student(value: Student | undefined) {
    this._student = value;
    if(this.student!=undefined){
    this.studentForm = new FormGroup({
      "id": new FormControl(this.student.id),
      "firstName": new FormControl(this.student.firstName, [Validators.required]),
      "lastName": new FormControl(this.student.lastName),
      "address": new FormControl(this.student.address),
      "phone": new FormControl(this.student.phone, [Validators.required, Validators.minLength(9), Validators.maxLength(10)]),
      "professions": new FormControl(this.student.professionId),
      "year":new FormControl(this.student.year)
    })}
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
    this.student=this.studentForm.value;
    this.onSaveNewStudent.emit(this.student)
  }


}
