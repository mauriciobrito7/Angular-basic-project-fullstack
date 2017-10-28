import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {Routes, RouterModule} from '@angular/router';
import { CoursesListComponent } from './courses-list/courses-list.component';


import { NewCourseComponent } from './new-course/new-course.component';
import { ListaComponent } from './lista/lista.component';
import { NuevoComponent } from './nuevo/nuevo.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    SharedModule.forRoot()
  ],
  declarations: [HomeComponent, CoursesListComponent, NewCourseComponent, ListaComponent, NuevoComponent]
})
export class HomeModule { }
