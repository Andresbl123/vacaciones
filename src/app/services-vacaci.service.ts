import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { SolicitudesVacaciones, Datum } from './solicitudes_data.model';

/**
 * Decorator that marks a class as available to be provided and injected as a dependency.
 */
@Injectable({
  providedIn: 'root',
})
/**
 * service to make the connection to the vacation request API
 */
export class ServicesVacaciService {
  /**
   * constructor
   * @param https variable in which the module is instantiated HttpClient
   */
  constructor(private https: HttpClient) {}

  /**
   * Arrangement for storing those brought from the consumed API
   */
  solicitudes: Datum[] = [];

  // $modalFechaUtiliza = new EventEmitter<any>();

  /**
   * function that connects to the api and fetches the data from it.
   */
  getAllSolicitudes() {
    this.https
      .get<SolicitudesVacaciones>(
        'http://localhost:3000/data/solicitud_vacaciones'
      )
      .subscribe((response) => {
        console.log(response);
        this.solicitudes = response.Data;
        console.log(this.solicitudes.length, 'andres');
      });
    /*  if (this.solicitudes.length === 0) {
      this.router.navigateByUrl('Solicitudes_en_tramite/solicitar_vacaciones');
    }*/
  }
}
