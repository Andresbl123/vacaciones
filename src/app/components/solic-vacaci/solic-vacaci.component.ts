import { Component, OnInit, Injectable, Input } from '@angular/core';
import { ServicesVacaciService } from 'src/app/services-vacaci.service';
import { FormSoliVacacComponent } from '../form-soli-vacac/form-soli-vacac.component';
import { SolicitudesVacaciones, Datum } from '../../solicitudes_data.model';

@Component({
  selector: 'app-solic-vacaci',
  templateUrl: './solic-vacaci.component.html',
  styleUrls: ['./solic-vacaci.component.css'],
})
export class SolicVacaciComponent implements OnInit {
  constructor(
    private dataSolicitudes: ServicesVacaciService,
    private formSoliDias: FormSoliVacacComponent
  ) {
    this.dataSolicitudes.getAllSolicitudes();
    this.formSoliDias.generateID();
  }

  ngOnInit(): void {}

  newDataSolici: SolicitudesVacaciones[] = [];
  @Input() dataSolicitud: Datum = {
    id: this.formSoliDias.generateID(),
    modelo: '',
    referencia: this.formSoliDias.generateID(),
    fecha_solicitud: '',
    etapa: '',
    dias_utilizados: 0,
    fecha_salida: 0,
    fecha_ultima_actividad: '',
    usuario: '',
    tiempo_evaluacion: '',
  };

  get services() {
    return this.dataSolicitudes.solicitudes;
  }
}
