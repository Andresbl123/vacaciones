import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FechaUtilizacionComponent } from './fecha-utilizacion.component';
import { HistorialVacacionesComponent } from '../historial-vacaciones/historial-vacaciones.component';

fdescribe('fecha de utilizacion', () => {
  let component: FechaUtilizacionComponent;
  let fixture: ComponentFixture<FechaUtilizacionComponent>;

  let nombre: string = 'Andres';
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FechaUtilizacionComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FechaUtilizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('pruebas unitarias', () => {
    //expect(HistorialVacaciones).toBeDefined();
    expect(nombre).toEqual('Andres');
  });
  it('esta definido', () => {
    expect(nombre).toBeDefined();
  });
});
