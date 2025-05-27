import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from './app.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudenDetailsFormComponent } from './studen-details-form/studen-details-form.component';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';
import { studentService } from "./student.service";

@NgModule({
    declarations: [AppComponent, StudentsListComponent, StudentDetailsComponent, StudenDetailsFormComponent, TestComponent],
    imports: [BrowserModule, FormsModule, ReactiveFormsModule],
    providers:[studentService],
    bootstrap: [AppComponent]
})
export class AppModule {

}