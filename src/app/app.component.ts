import { Component, Input } from "@angular/core";
import { Student } from "./Student.model";
import { Test } from "./models/test.model";

@Component({
    templateUrl: "./app.component.html",
    selector: "my-app-root"
})
export class AppComponent {
   
selectsdStudent: Student|undefined;
selectsdStudentTest:Test[] | undefined;

  selectedStudentToApp(student: Student) {
    
    this.selectsdStudent = student;
    this.selectsdStudentTest = student.testsList
    console.log(this.selectsdStudent);
    
    // alert("Selected student: " + student.firstName + " " + student.lastName);
  }

}