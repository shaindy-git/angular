import { NgModule } from "@angular/core";
import { StudentsListComponent } from "./students-list/students-list.component";
import { StudentDetailsComponent } from "./student-details/student-details.component";
import { StudenDetailsFormComponent } from "./studen-details-form/studen-details-form.component";
import { studentService } from "./student.service";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { TestModule } from "../tests/test/test";


@NgModule({
    declarations:[StudentsListComponent, StudentDetailsComponent, StudenDetailsFormComponent ],
    imports:[BrowserModule,FormsModule, ReactiveFormsModule, HttpClientModule,TestModule ],
    providers:[studentService],
    exports:[StudentsListComponent]
})


export class StudentsModule{

}