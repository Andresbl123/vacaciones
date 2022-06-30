import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServicePDFService {
  constructor() {}

  $modalPDF = new EventEmitter<any>();
}
