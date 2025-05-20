import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from '../Student.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-studen-details-form',
  templateUrl: './studen-details-form.component.html',
  styleUrls: ['./studen-details-form.component.scss']
})
export class StudenDetailsFormComponent {

  private _student?: Student

  public get student(): Student | undefined {
    return this._student
  }



  studentForm?: FormGroup
  @Input()
  public set student(value: Student | undefined) {
    this._student = value;
    this.studentForm = new FormGroup({
      "firstName": new FormControl(this.student?.firstName, [Validators.required]),
      "lastName": new FormControl(this.student?.lastName),
      "address": new FormControl(this.student?.address, [Validators.required]),
      "phone": new FormControl(this.student?.phone, [Validators.required, Validators.minLength(9), Validators.maxLength(10)])
    })
  }

  @Output()
  onSaveNewStudent: EventEmitter<Student> = new EventEmitter();




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
    this.onSaveNewStudent.emit(this.student)
  }


}
