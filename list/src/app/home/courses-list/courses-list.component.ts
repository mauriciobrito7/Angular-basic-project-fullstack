// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { Course } from './../../shared/model/course.model';
import { CourseService } from './../../shared/services/course.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {

  private courses$: Observable<Course[]> = new Observable<Course[]>();
  private courses: Course[] = [];

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.courses$ = this.courseService.getCourses$();
    this.courses$.subscribe(courses =>
      this.courses = courses
    );
  }

}
