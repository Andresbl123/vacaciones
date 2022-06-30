import { Component, Input, OnInit } from '@angular/core';
import { ServicesVacaciService } from '../../services-vacaci.service';
import { ServicePDFService } from '../../services/service-pdf.service';
import { DataRegistrosService } from '../../services/data-registros.service';
import { Registro } from 'src/app/Data.model';
import { FechaUtilizacionComponent } from '../fecha-utilizacion/fecha-utilizacion.component';

@Component({
  selector: 'app-historial-vacaciones',
  templateUrl: './historial-vacaciones.component.html',
  styleUrls: ['./historial-vacaciones.component.css'],
})
export class HistorialVacacionesComponent implements OnInit {
  modalSwitch: boolean = true;
  modalSwitchPDF!: boolean;
  // data: Data[] = [];

  constructor(private dataRegistro: DataRegistrosService) {
    this.dataRegistro.getAllData();
  }

  /*
  @Input() registros: Data = {
    id: 0,
    nombre: '',
    fecha_inicio: '',
    fecha_fin: '',
    dias_disfrutados: 0,
    forma_utilizacion: '',
    acta_de_disfrute: '',
  };
*/
  ngOnInit(): void {}

  get datas() {
    return this.dataRegistro.data;
  }
}
