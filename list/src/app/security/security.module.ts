import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecurityComponent } from './security.component';
import {Routes, RouterModule} from '@angular/router';
import { SecurityService } from './security.service';
import { FormsModule, NgModel } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: SecurityComponent
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule.forRoot(),
    FormsModule
  ],
  declarations: [SecurityComponent],
  providers: [SecurityService]
})
export class SecurityModule { }
