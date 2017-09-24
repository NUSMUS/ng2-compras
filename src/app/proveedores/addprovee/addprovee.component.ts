import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addprovee',
  templateUrl: './addprovee.component.html',
  styleUrls: ['./addprovee.component.css']
})
export class AddproveeComponent implements OnInit {

  @ViewChild('formpro') formpro: NgForm;
  proveedor: any;
  constructor() {
    this.proveedor = {
      nombre: '',
      nrc: '',
      direccion: '',
      cp: '',
      ciudad: '',
      estado: '',
      telefono: null,
      email: '',
      contacto: ''
    }
  }

  estados: string[] = [
    'Aguascalintes','Baja California','Baja California Sur','Campeche','Chiapas','Chihuahua','Ciudad de México','Coahuila','Colima','Durango',
    'Guanajuato','Guerrero','Hidalgo','Jalisco','México','Michoacán','Morelos','Nayarit','Nuevo León','Oaxaca','Puebla','Querétaro','Quintana Roo',
    'San Luis Potosí','Sinaloa','Sonora','Tabasco','Tamaulipas','Tlaxcala','Veracruz','Yucatán','Zacatecas'
  ]

  onSubmit() {
    this.proveedor.nombre = this.formpro.value.nombre;
    this.proveedor.nrc = this.formpro.value.nrc;
    this.proveedor.direccion = this.formpro.value.direccion;
    this.proveedor.cp = this.formpro.value.cp;
    this.proveedor.ciudad = this.formpro.value.ciudad;
    this.proveedor.estado = this.formpro.value.estado;
    this.proveedor.telefono = this.formpro.value.telefono;
    this.proveedor.email = this.formpro.value.email;
    this.proveedor.contacto = this.formpro.value.contacto;

    this.formpro.reset();
  }

  ngOnInit() {
  }

}
