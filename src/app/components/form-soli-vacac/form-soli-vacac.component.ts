import { JsonpClientBackend } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Registro } from 'src/app/Data.model';
import { SolicitudesVacaciones, Datum } from 'src/app/solicitudes_data.model';

@Component({
  selector: 'app-form-soli-vacac',
  templateUrl: './form-soli-vacac.component.html',
  styleUrls: ['./form-soli-vacac.component.css'],
})
export class FormSoliVacacComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() dataSolicitud: Datum = {
    id: this.generateID(),
    modelo: '',
    referencia: this.generateID(),
    fecha_solicitud: '',
    etapa: '',
    dias_utilizados: 0,
    fecha_salida: 0,
    fecha_ultima_actividad: '',
    usuario: '',
    tiempo_evaluacion: '',
  };

  newDataSolici: SolicitudesVacaciones[] = [];

  generateID() {
    let date = new Date().getTime();
    let id = 'xxxx4xxxyxx'.replace(/[xy]/g, function (calculo) {
      let result = (date + Math.random() * 16) % 16 | 0;
      date = Math.floor(date / 16);
      return (calculo == 'x' ? result : (result & 0x3) | 0x8).toString(16);
    });
    return id;
  }

  mostrarInfo() {
    console.log(JSON.stringify(this.dataSolicitud));
  }
}
