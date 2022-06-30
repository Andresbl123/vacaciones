import { Component, Input } from '@angular/core';
import { ServicesVacaciService } from './services-vacaci.service';
import { Registro } from './Data.model';
import { HistorialVacacionesComponent } from './components/historial-vacaciones/historial-vacaciones.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'vacaciones';

  constructor() {}
}
