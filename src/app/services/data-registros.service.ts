import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Consulta, Registro } from '../Data.model';

@Injectable({
  providedIn: 'root',
})
export class DataRegistrosService {
  constructor(private http: HttpClient) {}
  data: Registro[] = [];

  getAllData() {
    this.http
      .get<Consulta>('http://localhost:3000/vacaciones/registros')
      .subscribe((response) => {
        console.log(response);
        this.data = response.Registros;
      });
    //return this.http.get<Data[]>('https://fakestoreapi.com/products');
  }
}
