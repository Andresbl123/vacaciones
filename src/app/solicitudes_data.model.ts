// To parse this data:
//
//   import { Convert, SolicitudesVacaciones } from "./file";
//
//   const solicitudesVacaciones = Convert.toSolicitudesVacaciones(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

/**
 * class for the structure of the data consumed from the
 */
export interface SolicitudesVacaciones {
  /**
   * variable of type array
   */
  Data: Datum[];
}

/**
 * Definition of the structure of the object consumed in the API
 */
export interface Datum {
  /**
   * id
   */
  id: number;
  /**
   * model
   */
  modelo: string;
  /**
   * Reference
   */
  referencia: string;
  /**
   * request date
   */
  fecha_solicitud: string;
  /**
   * stege
   */
  etapa: string;
  /**
   * used days
   */
  dias_utilizados: number | null;
  /**
   * exit date
   */
  fecha_salida: number;
  /**
   * date of last activity
   */
  fecha_ultima_actividad: string;
  /**
   * user
   */
  usuario: string;
  /**
   * time of evaluation
   */
  tiempo_evaluacion: string;
}
