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
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { StudentsListComponent } from "./modules/students/students-list/students-list.component";
import { HomeComponent } from './home/home.component';
import { RouterModule, Route } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";



@NgModule({
    declarations: [AppComponent, PageNotFoundComponentComponent, HomeComponent],
    imports: [BrowserModule, StudentsModule, TestModule, ObservableModule,AppRoutingModule],
    providers:[],
    bootstrap: [AppComponent]
})
export class AppModule {

}