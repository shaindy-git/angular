import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ObservableComponent } from "./modules/observable/observable/observable.component";
import { StudentsModule } from "./modules/students/students";
import { TestModule } from "./modules/tests/test/test";
import { ObservableModule } from "./modules/observable/observable/observable";

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, StudentsModule, TestModule, ObservableModule],
    providers:[],
    bootstrap: [AppComponent]
})
export class AppModule {

}