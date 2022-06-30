import { Component, OnInit } from '@angular/core';
import { ServicesVacaciService } from 'src/app/services-vacaci.service';

@Component({
  selector: 'app-solic-vacaci',
  templateUrl: './solic-vacaci.component.html',
  styleUrls: ['./solic-vacaci.component.css'],
})
export class SolicVacaciComponent implements OnInit {
  constructor(private dataSolicitudes: ServicesVacaciService) {
    this.dataSolicitudes.getAllSolicitudes();
  }

  ngOnInit(): void {}

  get services() {
    return this.dataSolicitudes.solicitudes;
  }
}
