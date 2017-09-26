import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { GuardService } from '../../servicios/guard.service';

import { FacturasComponent } from './facturas/facturas.component';

const routes: Routes = [
  { path: 'facturas', component: FacturasComponent, canActivate: [GuardService] }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpModule,
  ],
  declarations: [
    FacturasComponent
  ],
  providers: [
    GuardService
  ]
})
export class FacturasModule { }
