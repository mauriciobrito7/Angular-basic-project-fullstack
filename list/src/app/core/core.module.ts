import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { NavBarComponent } from './shell/nav-bar/nav-bar.component';
import { FooterComponent } from './shell/footer/footer.component';
import { MainContentComponent } from './shell/main-content/main-content.component';

import { Routes, RouterModule } from '@angular/router';
/*Rutas principales de la app para cada componente principal de la aplicación */


const routes: Routes = [
  {
    path: '',
    loadChildren: './../home/home.module#HomeModule'
  },
  {
    path: 'about',
    loadChildren: './../about/about.module#AboutModule'
  },
  {
    path: 'security',
    loadChildren: './../security/security.module#SecurityModule'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [ShellComponent, NavBarComponent, MainContentComponent, FooterComponent],
  exports: [
    ShellComponent
  ]
})
export class CoreModule { }
