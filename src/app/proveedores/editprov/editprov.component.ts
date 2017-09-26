import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { ProveedoresService } from '../../../servicios/proveedores.service';

@Component({
  selector: 'app-editprov',
  templateUrl: './editprov.component.html',
  styleUrls: ['./editprov.component.css']
})
export class EditprovComponent implements OnInit {

  proveedorForm: FormGroup;
  proveedor: any;

  id: string;
  estados: string[] = [
    'Aguascalintes','Baja California','Baja California Sur','Campeche','Chiapas','Chihuahua','Ciudad de México','Coahuila','Colima','Durango',
    'Guanajuato','Guerrero','Hidalgo','Jalisco','México','Michoacán','Morelos','Nayarit','Nuevo León','Oaxaca','Puebla','Querétaro','Quintana Roo',
    'San Luis Potosí','Sinaloa','Sonora','Tabasco','Tamaulipas','Tlaxcala','Veracruz','Yucatán','Zacatecas'
  ]
  constructor(private pvf: FormBuilder, private proveedorService: ProveedoresService, private router: Router, private activeRouter: ActivatedRoute) {
    this.activeRouter.params
      .subscribe(parametros => {
        this.id = parametros['id'];
        this.proveedorService.getProveedor(this.id)
          .subscribe(proveedor => this.proveedor = proveedor)
      });
  }

  ngOnInit() {
    this.proveedorForm = this.pvf.group ({
      nombre: ['', Validators.required ],
      nrc: ['', Validators.required ],
      direccion: ['', Validators.required],
      cp: ['',Validators.compose([Validators.required, Validators.minLength(5)])],
      ciudad: ['', Validators.required],
      estado: ['', Validators.required],
      telefono: ['',Validators.required],
      email: ['',Validators.required],
      contacto: ['',Validators.required]
    });
  }

  onSubmit() {
    this.proveedor = this.saveProveedor();
    this.proveedorService.putProveedor(this.proveedor, this.id)
      .subscribe(newprov => {
        this.router.navigate(['/proveedores'])
      })
  }

  saveProveedor() {
    const saveProveedor = {
      nombre: this.proveedorForm.get('nombre').value,
      nrc: this.proveedorForm.get('nrc').value,
      direccion: this.proveedorForm.get('direccion').value,
      cp: this.proveedorForm.get('cp').value,
      ciudad: this.proveedorForm.get('ciudad').value,
      estado: this.proveedorForm.get('estado').value,
      telefono: this.proveedorForm.get('telefono').value,
      email: this.proveedorForm.get('email').value,
      contacto: this.proveedorForm.get('contacto').value
    };
    return saveProveedor;
  }
}
