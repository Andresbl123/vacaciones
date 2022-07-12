import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Consulta, Registro } from '../Data.model';

/**
 * Decorator that marks a class as available to be provided and injected as a dependency.
 */
@Injectable({
  providedIn: 'root',
})

/**
 * Service for connecting to and consuming data from an API (vacation log)
 */
export class DataRegistrosService {
  /**
   * COnstructor
   * @param http HttpClient's model is required
   */
  constructor(private http: HttpClient) {}
  /**
   * Variable to store the response data of the api to be consumed
   */
  data: Registro[] = [];

  /**
   * Connects to an api consuming the data
   */
  getAllData() {
    this.http
      .get<Consulta>('http://localhost:3000/vacaciones/registros')
      .subscribe((response) => {
        console.log(response);
        this.data = response.Registros;
      });
  }
}
