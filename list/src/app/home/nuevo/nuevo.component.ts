import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';
import { Course } from './../../shared/model/course.model';
import { CourseService } from './../../shared/services/course.service';
@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.scss']
})
export class NuevoComponent implements OnInit {
  /*Propiedad para entrada de un nodo no tiene tipo para ingresar cualquier tipo de nodo */
  @Input() nodo;

  /*Propiedad para emitir evento de guardado de nodo actual*/
  @Output() guardar: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }
  
  guardarAlgo() {
    this.guardar.emit(this.nodo);
  }

}
