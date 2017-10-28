import { Component, OnInit } from '@angular/core';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';
import { Course } from './../../shared/model/course.model';
import { CourseService } from './../../shared/services/course.service';
@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.scss']
})
export class NewCourseComponent implements OnInit {
  private newCourse: Course;
  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.newCourse = this.courseService.getNewCourse();
  }

  public saveCourse() {
    this.courseService.postCourse(this.newCourse);
    /*Creamos un nuevo curso en memoria */
    this.newCourse = this.courseService.getNewCourse();
  }

}
