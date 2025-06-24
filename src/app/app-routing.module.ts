import { NgModule } from "@angular/core";
import { StudentsListComponent } from "./modules/students/students-list/students-list.component";
import { PageNotFoundComponentComponent } from "./page-not-found-component/page-not-found-component.component";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { StudenDetailsFormComponent } from "./modules/students/studen-details-form/studen-details-form.component";

const ROUTES: Routes = [
    { path: '', redirectTo: '/home', pathMatch: "full" },
    { path: 'home', component: HomeComponent },
    { path: 'studentslist', component: StudentsListComponent },
    { path: 'studentsDetails/:id', component: StudenDetailsFormComponent },
    { path: '**', component: PageNotFoundComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
