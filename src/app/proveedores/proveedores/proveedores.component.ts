import { Component, OnInit } from '@angular/core';

import { ProveedoresService } from '../../../servicios/proveedores.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {

  proveedores: any[] = [];
  cargando = true;
  //Devuelve un objeto con todos los presupuestos en el formato FIREBASE
  constructor( private proveedoresService: ProveedoresService ) {
    this.proveedoresService.getProveedores()
      .subscribe(proveedores => {
        for (const id$ in proveedores) {
          const p = proveedores[id$];
          p.id$ = id$;
          this.proveedores.push(proveedores[id$]);
        }
        this.cargando = false;
      })
  }

  //Elimina un registro de la tabla
  eliminarProveedor(id$) {
    this.proveedoresService.deletProveedor(id$)
      .subscribe(res => {
        //Actualiza tabla de los eliminados
        this.proveedores = [];
        this.proveedoresService.getProveedores()
        .subscribe(proveedores => {
          for (const id$ in proveedores) {
            const p = proveedores[id$];
            p.id$ = id$;
            this.proveedores.push(proveedores[id$]);
          }
        })
        console.log(res);
      })
  }

  ngOnInit() {
    
  }

}
