import { Component, OnInit } from '@angular/core';
import { ServicePDFService } from '../../services/service-pdf.service';

@Component({
  selector: 'app-mostrar-pdf',
  templateUrl: './mostrar-pdf.component.html',
  styleUrls: ['./mostrar-pdf.component.css'],
})
export class MostrarPDFComponent implements OnInit {
  constructor(private modalPDF: ServicePDFService) {}

  ngOnInit(): void {}
}
