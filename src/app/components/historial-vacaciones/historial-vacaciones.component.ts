import { Component, OnInit } from '@angular/core';
import { DataRegistrosService } from '../../services/data-registros.service';

/**
 * Components vacation history
 */
@Component({
  selector: 'app-historial-vacaciones',
  templateUrl: './historial-vacaciones.component.html',
  styleUrls: ['./historial-vacaciones.component.css'],
})
/**
 * Component for leave history
 */
export class HistorialVacacionesComponent {
  // variable donde se almacena el index retornado de la función returIndex()

  /**
   * Variable to store the index returned by the function returIndex()
   */
  ind: number = 0;

  /**
   * constructor
   * @param dataRegistro Instance to obtain consumed API data
   */
  constructor(private dataRegistro: DataRegistrosService) {
    this.dataRegistro.getAllData();
  }

  /**
   * ngOnInit
   */
  // ngOnInit(): void {}

  //Data del json api
  /**
   * Return vacation history data
   */
  get datas() {
    return this.dataRegistro.data;
  }

  // Funcion que retorna el index del html
  /**
   * Function that returns the html index
   * @param index  index of the object to be validated
   * @returns index where the index of the iterated object is stored in html
   */
  returIndex(index: number) {
    return (this.ind = index);
  }
}
