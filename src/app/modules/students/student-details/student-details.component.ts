import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from '../Student.model';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent {


  @Input()
  student: Student | undefined;

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
