import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class PresupuestosService {

  //Ingresar aqui la ruta de la base de datos FIREBASE
  presURL = 'https://comprasapp-f3206.firebaseio.com/presupuestos.json';
  //Ingresar aqui la ruta para el servicio PUT
  presPutURL = 'https://comprasapp-f3206.firebaseio.com/presupuestos'
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

  //Recuperar registros de la base de datos con una determinada ID
  getPresupuesto(id$: string) {
    const url = `${this.presPutURL}/${id$}.json`;
    return this.http.get(url)
      .map(res => res.json());
  }

  getPresupuestos() {
    return this.http.get(this.presURL)
      .map(res => res.json());
  }

  putPresupuesto(presupuesto: any, id$:string) {
    const newpre = JSON.stringify(presupuesto);
    const headers = new Headers ({
      'Content-Type': 'application/json'
    });

    const url = `${this.presPutURL}/${id$}.json`;

    return this.http.put(url, newpre, {headers})
      .map(res => {
        console.log(res.json());
        return res.json();
      })
  }
}
