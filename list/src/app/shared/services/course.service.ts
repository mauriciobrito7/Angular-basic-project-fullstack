import { Injectable } from '@angular/core';
import { Course, CourseModel } from '../model/course.model';

/* Programación reactiva*/
// tslint:disable-next-line:import-blacklist
import { Observable, Subject } from 'rxjs/Rx';

@Injectable()
export class CourseService {

  private courses: Course[] = [];
  private courses$: Subject<Course[]> = new Subject<Course[]>();
  private newCourse: Course;
  constructor() { }

/*Guarda un course en el almacen y notifica ese evento*/
  public postCourse(course: Course) {
    let courseClone: Course = Object.assign({}, course);
    this.courses.push(courseClone);
    this.courses$.next(this.courses);
  }
  public getCourses(): Course[] {
    return this.courses;
  }
  public getNewCourse(): Course {
    return new Course('', '');
  }
/*Devuelve un observable que  notifica cambios en el almacen de courses */
  public getCourses$(): Observable<Course[]> {
    return this.courses$.asObservable();
  }

}
