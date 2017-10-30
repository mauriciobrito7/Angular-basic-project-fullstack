import { HttpToolsService } from './services/http-tools.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseService } from './services/course.service';
import { HttpModule } from '@angular/http';
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
    MatInputModule,
    HttpModule
  ],
  declarations: [],
  exports: [ MatButtonModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatCardModule,
    MatTableModule,
    MatInputModule],
    providers: []
})
export class SharedModule {

    //
    static forRoot() {
      return {
        ngModule: SharedModule,
        providers: [
          CourseService,
          HttpToolsService
        ]
      };
    }

 }
