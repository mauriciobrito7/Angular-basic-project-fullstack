import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseService } from './services/course.service';
import {
  MatButtonModule, MatIconModule, MatListModule, MatToolbarModule, MatCardModule,  MatTableModule, MatInputModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatCardModule,
    MatTableModule,
    MatInputModule
  ],
  declarations: [],
  exports: [ MatButtonModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatCardModule,
    MatTableModule,
    MatInputModule]
})
export class SharedModule {

    //
    static forRoot() {
      return {
        ngModule: SharedModule,
        providers: [
          CourseService
        ]
      };
    }

 }
