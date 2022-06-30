import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HistorialVacacionesComponent } from './components/historial-vacaciones/historial-vacaciones.component';
import { FechaUtilizacionComponent } from './components/fecha-utilizacion/fecha-utilizacion.component';
import { MostrarPDFComponent } from './components/mostrar-pdf/mostrar-pdf.component';
import { SolicVacaciComponent } from './components/solic-vacaci/solic-vacaci.component';
import { FormSoliVacacComponent } from './components/form-soli-vacac/form-soli-vacac.component';
import { SolicPagVacacComponent } from './components/solic-pag-vacac/solic-pag-vacac.component';
import { FormPagVacacComponent } from './components/form-pag-vacac/form-pag-vacac.component';
import { ErrorConectionComponent } from './components/error-conection/error-conection.component';

@NgModule({
  declarations: [
    AppComponent,
    HistorialVacacionesComponent,
    FechaUtilizacionComponent,
    MostrarPDFComponent,
    SolicVacaciComponent,
    FormSoliVacacComponent,
    SolicPagVacacComponent,
    FormPagVacacComponent,
    ErrorConectionComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
