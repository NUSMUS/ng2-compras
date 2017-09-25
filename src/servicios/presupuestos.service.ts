import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class PresupuestosService {

  //Ingresar aqui la ruta de la base de datos FIREBASE
  presURL = 'https://comprasapp-f3206.firebaseio.com/presupuestos.json';
  constructor(private http: Http) { }

  postPresupuesto ( presupuesto: any ) {
    const newpres = JSON.stringify(presupuesto);
    const headers = new Headers ({
      'Content-Type': 'application/json'
    });

    return this.http.post( this.presURL, newpres,  { headers } )
      .map( res => {
        console.log(res.json());
        return res.json();
      })
  }

  getPresupuestos() {
    return this.http.get(this.presURL)
      .map(res => res.json());
  }
}
