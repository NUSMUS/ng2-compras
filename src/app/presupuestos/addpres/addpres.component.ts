import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

//Importacion del servicio
import { PresupuestosService } from '../../../servicios/presupuestos.service';
import { ProveedoresService } from '../../../servicios/proveedores.service';

@Component({
  selector: 'app-addpres',
  templateUrl: './addpres.component.html',
  styleUrls: ['./addpres.component.css']
})
export class AddpresComponent implements OnInit {

  presupuestoForm: FormGroup;
  presupuesto: any;
  base: any;
  tipo: any;
  iva: any = 0;
  total: any = 0;

  proveedores: any[] = [];
  //Añadir en el constructor el nuevo servicio
  constructor( 
    private pf: FormBuilder,
    private presupuestosService: PresupuestosService,
    private router: Router,
    private activatedRouter: ActivatedRoute,
    private proveedoresService: ProveedoresService ) { 

    //Obetener la lista de proveedores
    this.proveedoresService.getProveedores()
      .subscribe(proveedores => {
        for (const id$ in proveedores) {
          const p = proveedores[id$];
          p.id$ = id$;
          this.proveedores.push(proveedores[id$]);
        }
      })
  }

  ngOnInit() {
    this.presupuestoForm = this.pf.group ({
      proveedor: ['', Validators.required ],
      fecha: ['', Validators.required ],
      concepto: ['',Validators.compose([Validators.required, Validators.minLength(10)])],
      base: ['', Validators.required ],
      tipo: ['', Validators.required ],
      iva: this.iva,
      total: this.total
    });
    this.onChanges();
  }

  onChanges(): void {
    this.presupuestoForm.valueChanges.subscribe(valor => {
      this.base = valor.base;
      this.tipo = valor.tipo;
      this.presupuestoForm.value.iva = this.base * this.tipo;
      this.presupuestoForm.value.total = this.base + (this.base * this.tipo);
    });
  }

  //Se añade el metodo postPresupuestos del servicio, que enviará el objeto presupuesto del componente
  onSubmit() {
    this.presupuesto = this.savePresupuesto();
    this.presupuestosService.postPresupuesto(this.presupuesto)
      .subscribe(newpres => {
        
      })
      this.presupuestoForm.reset();
  }

  savePresupuesto() {
    const savePresupuesto = {
      proveedor: this.presupuestoForm.get('proveedor').value,
      fecha: this.presupuestoForm.get('fecha').value,
      concepto: this.presupuestoForm.get('concepto').value,
      base: this.presupuestoForm.get('base').value,
      tipo: this.presupuestoForm.get('tipo').value,
      iva: this.presupuestoForm.get('iva').value,
      total: this.presupuestoForm.get('total').value
    };
    return savePresupuesto;
  }
}
