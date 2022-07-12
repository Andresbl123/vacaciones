import { Component } from '@angular/core';
import { ServicesVacaciService } from 'src/app/services-vacaci.service';

/**
 * Component to display vacation request data
 */
@Component({
  selector: 'app-solic-vacaci',
  templateUrl: './solic-vacaci.component.html',
  styleUrls: ['./solic-vacaci.component.css'],
})

/**
 * component to display vacation request data
 */
export class SolicVacaciComponent /*implements OnInit*/ {
  /**
   *
   * @param dataSolicitudes instance vacation service -> the vacation service the function that connects to the api and fetches the data from it
   */
  constructor(private dataSolicitudes: ServicesVacaciService) {
    this.dataSolicitudes.getAllSolicitudes();
  }

  //ngOnInit(): void {}

  // Retorna la data de solicitudes de vaciciones

  /**
   * Returns the data of emptying requests
   */
  get services() {
    return this.dataSolicitudes.solicitudes;
  }

  //Funcion que elimina un elemento de la solicitud de vacaciones
  /**
   * removes an item from the vacation request
   * @param index index of the object to be deleted
   */
  deleteREgister(index: number) {
    this.services.splice(index, 1);
  }
}
