import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { SolicitudesVacaciones, Datum } from './solicitudes_data.model';

@Injectable({
  providedIn: 'root',
})
export class ServicesVacaciService {
  constructor(private https: HttpClient) {}
  solicitudes: Datum[] = [];

  $modalFechaUtiliza = new EventEmitter<any>();

  getAllSolicitudes() {
    this.https
      .get<SolicitudesVacaciones>(
        'http://localhost:3000/data/solicitud_vacaciones'
      )
      .subscribe((response) => {
        console.log(response);
        this.solicitudes = response.Data;
      });
  }
}
