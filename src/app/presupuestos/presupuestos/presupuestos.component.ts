import { Component, OnInit } from '@angular/core';

import { PresupuestosService } from '../../../servicios/presupuestos.service';

@Component({
  selector: 'app-presupuestos',
  templateUrl: './presupuestos.component.html',
  styleUrls: ['./presupuestos.component.css']
})
export class PresupuestosComponent implements OnInit {

  presupuestos: any[] = [];
  //Devuelve un objeto con todos los presupuestos en el formato FIREBASE
  constructor(private presupuestosService: PresupuestosService) {
    this.presupuestosService.getPresupuestos()
      .subscribe(presupuestos => {
        for (const id$ in presupuestos) {
          const p = presupuestos[id$];
          p.id$ = id$;
          this.presupuestos.push(presupuestos[id$]);
        }
      })
  }

  //Elimina un registro de la tabla
  eliminarPresupuesto(id$) {
    this.presupuestosService.deletPresupuesto(id$)
      .subscribe(res => {
        //Actualiza tabla de los eliminados
        this.presupuestos = [];
        this.presupuestosService.getPresupuestos()
        .subscribe(presupuestos => {
          for (const id$ in presupuestos) {
            const p = presupuestos[id$];
            p.id$ = id$;
            this.presupuestos.push(presupuestos[id$]);
          }
        })
        console.log(res);
      })
  }

  ngOnInit() {
  }
}
