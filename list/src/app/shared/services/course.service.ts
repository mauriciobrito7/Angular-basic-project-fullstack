
import { HttpToolsService } from './http-tools.service';
import { Injectable } from '@angular/core';
import { Course, CourseModel } from '../model/course.model';
import { Http } from '@angular/http';

/* Programación reactiva*/
// tslint:disable-next-line:import-blacklist
import { Observable, Subject } from 'rxjs/Rx';

@Injectable()
export class CourseService {

  private courses: Course[] = [];
  private courses$: Subject<Course[]> = new Subject<Course[]>();
  private newCourse: Course;
  private urlBase: string = 'http://localhost:3030/api';
  constructor(
    private http: Http, private httpToolsService: HttpToolsService
  ) { }

/*Guarda un course en el almacen y notifica ese evento*/
  public postCourse(course: Course) {
        /**
     * primero preparación de datos para su envío
     * después suscripción y operaciones sobre la respuesta
     */
    let body = JSON.stringify(course);
    let options = this.httpToolsService.configurarCabeceras();
    if (course._id && course._id !== '_') {
      return this.http
        .put(`${this.urlBase}/priv/cursos/${course._id}`, body, options)
        .catch(this.httpToolsService.tratarErrores);
    }else {
      return this.http
        .post(`${this.urlBase}/priv/cursos`, body, options)
        .catch(this.httpToolsService.tratarErrores);
    }
  }
  public getCourses(): Observable<Course[]> {
    let options = this.httpToolsService.configurarCabeceras();
    return this.http
    .get(`${this.urlBase}/priv/cursos/`, options)
    .map(this.httpToolsService.obtenerDatos)
    .catch(this.httpToolsService.tratarErrores);
  }
  public getNewCourse(): Course {
    return new Course(1, '', '');
  }
/*Devuelve un observable que  notifica cambios en el almacen de courses */
  public getCourses$(): Observable<Course[]> {
    return this.courses$.asObservable();
  }

}
