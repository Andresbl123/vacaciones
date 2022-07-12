import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Registro } from 'src/app/Data.model';
import { HistorialVacacionesComponent } from '../historial-vacaciones/historial-vacaciones.component';

/**
 * Component showing the modal of the date range of the vacation usage form
 */
@Component({
  selector: 'app-fecha-utilizacion',
  templateUrl: './fecha-utilizacion.component.html',
  styleUrls: ['./fecha-utilizacion.component.css'],
})

/**
 * Components to validate the start and end dates of the leave request
 */
export class FechaUtilizacionComponent implements OnInit {
  /**
   * constructor
   * @param fechaUtilizacion Variable to instantiate the vacation history component.
   * @param retornarIndex Variable to instantiate the vacation history component.
   */
  constructor(
    private fechaUtilizacion: HistorialVacacionesComponent,
    private retornarIndex: HistorialVacacionesComponent
  ) {
    this.fechaUtilizacion.datas;
  }

  /**
   * stores the index of the object to validate
   */
  @Input() indexes = this.retornarIndex.ind;

  //Fechas retornadas de la funcion visualizar()

  /**
   * Dates returned from the visualizar() function
   */
  fechas = this.visualizar(this.indexes);

  /**
   * decorator, stores the start and end date of the vacation request
   */
  @Input() registro: Registro = {
    id: 0,
    nombre: '',
    fecha_inicio: this.fechas[0],
    fecha_fin: this.fechas[1],
    dias_disfrutados: 0,
    forma_utilizacion: '',
    acta_de_disfrute: '',
  };

  /**
   * ngOnInit
   */
  ngOnInit(): void {}

  // Funcion qye retorna las fechas del componente historial de vacaciones

  /**
   * Function to obtain the object according to the index for dates
   * @param indexe stores the index of the object to validate
   * @returns Array with start and end dates
   */
  visualizar(indexe: number): string[] {
    indexe = this.indexes;
    let fechas: string[] = [];
    this.fechaUtilizacion.datas.forEach(function (element, index) {
      if (indexe == index) {
        fechas.push(element.fecha_inicio, element.fecha_fin);
      }
    });
    return fechas;
  }
}
