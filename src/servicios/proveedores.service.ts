import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

@Injectable()
export class ProveedoresService {

  //Ingresar aqui la ruta de la base de datos FIREBASE
  provURL = 'https://comprasapp-f3206.firebaseio.com/proveedores.json';
  //Ingresar aqui la ruta para el servicio PUT
  provPutURL = 'https://comprasapp-f3206.firebaseio.com/proveedores';
  constructor(private http: Http) { }

  postProveedor(proveedor: any) {
    const newprov = JSON.stringify(proveedor);
    const headers = new Headers ({
      'Content-Type': 'application/json'
    });

    return this.http.post(this.provURL, newprov, {headers})
      .map(res => {
        console.log(res.json());
        return res.json();
      })
  }

  getProveedor(id$: string) {
    const url = `${this.provPutURL}/${id$}.json`;
    return this.http.get(url)
      .map(res => res.json());
  }

  getProveedores() {
    return this.http.get(this.provURL)
      .map(res => res.json());
  }

  putProveedor(proveedor: any, id$: string) {
    const newprov = JSON.stringify(proveedor);
    const headers = new Headers ({
      'Content-Type': 'applicacion/json'
    });

    const url = `${this.provPutURL}/${id$}.json`;

    return this.http.put(url, newprov, {headers})
      .map(res => {
        console.log(res.json());
        return res.json();
      })
  }

  deletProveedor(id$: string) {
    const url = `${this.provPutURL}/${id$}.json`;
    return this.http.delete(url)
      .map(res => res.json());
  }
}
