import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ProveedoresService } from '../servicios/proveedores.service';

import { AppComponent } from './app.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';

@NgModule({
  declarations: [
    AppComponent,
    ProveedoresComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ProveedoresService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
