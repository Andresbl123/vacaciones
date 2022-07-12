import { Injectable } from '@angular/core';

/**
 * Decorator that marks a class as available to be provided and injected as a dependency.
 */
@Injectable({
  /**
   * Decorator that marks a class as available to be provided and injected as a dependency.
   */
  providedIn: 'root',
})

/**
 * Service to open the modal displaying documentation (PDF)
 */
export class ServicePDFService {
  /**
   * constructor
   */
  constructor() {}

  //$modalPDF = new EventEmitter<any>();
}
