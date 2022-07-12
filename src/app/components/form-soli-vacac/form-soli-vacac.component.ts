import { Component, Input, OnInit } from '@angular/core';
import { ServicesVacaciService } from 'src/app/services-vacaci.service';
import { Datum } from 'src/app/solicitudes_data.model';

/**
 * Vacation Request Form Components
 */
@Component({
  selector: 'app-form-soli-vacac',
  templateUrl: './form-soli-vacac.component.html',
  styleUrls: ['./form-soli-vacac.component.css'],
})
/**
 * vacation request form
 */
export class FormSoliVacacComponent implements OnInit {
  /**
   * constructor
   * @param dataSolicitudes vacation service is required
   */
  constructor(private dataSolicitudes: ServicesVacaciService) {}

  /**
   * ngOnInit
   */
  ngOnInit(): void {}

  //Se almacena la informacion del modal para transferir al componente de solicitudes de vacaciones

  /**
   * decorator, stores the modal information to transfer to the vacation request component
   */
  @Input() dataSolicitud: Datum = {
    id: 0,
    modelo: '',
    referencia: this.generateID(),
    fecha_solicitud: new Date().toLocaleDateString('es-CO'),
    etapa: this.modeloSoli(),
    dias_utilizados: null,
    fecha_salida: 0,
    fecha_ultima_actividad: new Date().toLocaleDateString('es-CO'),
    usuario: this.respoSoli(),
    tiempo_evaluacion: (Math.random() * 10).toFixed(0).toString(),
  };

  //Funcion que agrega la data del formulario al componente de solicitud de vacaciones

  /**
   * Function that adds the form data to the vacation request component.
   */
  addregister() {
    this.dataSolicitudes.solicitudes.push(this.dataSolicitud);
  }

  //Fuciones que generan aleatoriamente datos
  /**
   * randomly generate data
   * @returns random ids
   */
  generateID() {
    let date = new Date().getTime();
    let id = 'xxxx4xxxyxx'.replace(/[xy]/g, function (calculo) {
      let result = (date + Math.random() * 16) % 16 | 0;
      date = Math.floor(date / 16);
      return (calculo == 'x' ? result : (result & 0x3) | 0x8).toString(16);
    });
    return id;
  }

  /**
   * randomly generates the responsible party
   * @returns status of the application
   */
  modeloSoli() {
    let modelo = ['Solicitud', 'Desembolso', 'Aprovado'];
    let alea = modelo[Math.floor(Math.random() * modelo.length)];
    return alea;
  }

  /**
   * randomly generates the area randomly
   * @returns area randomly
   */
  respoSoli() {
    let resposanble = ['Desarrollo', 'Fabrica', 'Gerencia', 'RRHH', 'general'];
    let aleatorio = resposanble[Math.floor(Math.random() * resposanble.length)];
    return aleatorio;
  }
}
