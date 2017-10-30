import { Component, OnInit } from '@angular/core';
import { SecurityService } from './security.service';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss']
})
export class SecurityComponent implements OnInit {

  usuario = {}; // :any = { email:'', password:''}
  mensaje = '';
  constructor(private securityService: SecurityService) {
  }

  ngOnInit() {
  }

  registrarUsuario() {
      console.log('Enviando credenciales apara registro: ' + JSON.stringify(this.usuario));
      this.securityService
          .registrar(this.usuario)
          .subscribe(
              r => {
                  console.log(r);
              },
              e => {
                  this.mostrarError(e);
              });
  }

  entrarUsuario() {
      console.log('Enviando credenciales para entrada: ' + JSON.stringify(this.usuario));
      this.mensaje = 'validando...';
      this.securityService
          .entrar(this.usuario)
          .subscribe(
              r => {
                  console.log(r);
              },
              e => {
                  this.mostrarError(e);
              });
  }

  mostrarError(e) {
      this.mensaje = 'ERROR';
      console.error(e);
  }

}
