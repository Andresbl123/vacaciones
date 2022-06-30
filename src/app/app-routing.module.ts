import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormSoliVacacComponent } from './components/form-soli-vacac/form-soli-vacac.component';
import { HistorialVacacionesComponent } from './components/historial-vacaciones/historial-vacaciones.component';
import { FechaUtilizacionComponent } from './components/fecha-utilizacion/fecha-utilizacion.component';
import { FormPagVacacComponent } from './components/form-pag-vacac/form-pag-vacac.component';
import { MostrarPDFComponent } from './components/mostrar-pdf/mostrar-pdf.component';
import { SolicVacaciComponent } from './components/solic-vacaci/solic-vacaci.component';
import { ErrorConectionComponent } from './components/error-conection/error-conection.component';

const routes: Routes = [
  {
    path: 'hostorial_vaciones',
    component: HistorialVacacionesComponent,
    children: [
      {
        path: 'fecha_utilizacion',
        component: FechaUtilizacionComponent,
      },
      {
        path: 'acta_disfrute',
        component: MostrarPDFComponent,
      },
    ],
  },
  {
    path: 'Solicitudes_en_tramite',
    component: SolicVacaciComponent,
    children: [
      {
        path: 'solicitar_vaciones',
        component: FormSoliVacacComponent,
      },
    ],
  },
  {
    path: '',
    redirectTo: '/hostorial_vaciones',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: ErrorConectionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
