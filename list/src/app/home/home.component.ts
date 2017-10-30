import { CourseService } from './../shared/services/course.service';
import { Component, OnInit } from '@angular/core';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';
import { Course } from '../shared/model/course.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private cursos: Course[];
  private cursos$: Observable<Course[]>;
  private newCourse: Course;

  constructor(private courseService: CourseService) {
  }
  ngOnInit() {
    this.cursos$ = this.courseService.getCourses$();
    this.cursos$.subscribe(cursos => {
      this.cursos = cursos;
    });
    this.newCourse = this.courseService.getNewCourse();
  }

  public saveCourse() {
    this.courseService.postCourse(this.newCourse);
    /*Creamos un nuevo curso en memoria */
    this.newCourse = this.courseService.getNewCourse();
  }

}
