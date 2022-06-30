import { Component, OnInit, Input } from '@angular/core';
import { ServicesVacaciService } from '../../services-vacaci.service';
import { Router } from '@angular/router';
import { DataRegistrosService } from '../../services/data-registros.service';
import { Registro } from 'src/app/Data.model';
import { HistorialVacacionesComponent } from '../historial-vacaciones/historial-vacaciones.component';

@Component({
  selector: 'app-fecha-utilizacion',
  templateUrl: './fecha-utilizacion.component.html',
  styleUrls: ['./fecha-utilizacion.component.css'],
})
export class FechaUtilizacionComponent implements OnInit {
  constructor(
    private modalFU: ServicesVacaciService,
    private fechaUtilizacion: DataRegistrosService
  ) {
    this.fechaUtilizacion.getAllData();
  }

  @Input() registro: Registro = {
    id: 0,
    nombre: '',
    fecha_inicio: '06/08/2015',
    fecha_fin: '16/08/2012',
    dias_disfrutados: 0,
    forma_utilizacion: '',
    acta_de_disfrute: '',
  };

  ngOnInit(): void {}

  get fechas() {
    return this.fechaUtilizacion.data;
  }
}
