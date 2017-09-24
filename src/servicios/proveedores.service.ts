import { Injectable } from '@angular/core';

@Injectable()
export class ProveedoresService {

  proveedores: any = [
    {
      nombre: 'Telefonica',
      cif: 'B12345678',
      direccion: 'Paseo de la Castellana, 100',
      cp: '28.010',
      localidad: 'Madrid',
      provincia: 'Madrid',
      telefono: '911111111',
      email: 'info@telefonica.com',
      contacto: 'Juan Perez'
    },
    {
      nombre: 'Iberdrola',
      cif: 'B87654321',
      direccion: 'Principe de Vergara, 200',
      cp: '28.015',
      localidad: 'Madrid',
      provincia: 'Madrid',
      telefono: '922222222',
      email: 'info@iberdrola.com',
      contacto: 'Laura Martinez'
    }
  ]
  getProveedores() {
    return this.proveedores;
  }
}
