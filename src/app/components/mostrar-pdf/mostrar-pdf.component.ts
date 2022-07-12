import { Component, OnInit } from '@angular/core';
import { ServicePDFService } from '../../services/service-pdf.service';

/**
 * Component for the modal displaying the leave request record
 */
@Component({
  selector: 'app-mostrar-pdf',
  templateUrl: './mostrar-pdf.component.html',
  styleUrls: ['./mostrar-pdf.component.css'],
})

/**
 * Component for displaying PDF
 */
export class MostrarPDFComponent implements OnInit {
  /**
   * constructor
   */
  constructor() {} //private modalPDF: ServicePDFService
  /**
   * ngOnInit
   */
  ngOnInit(): void {}
}
