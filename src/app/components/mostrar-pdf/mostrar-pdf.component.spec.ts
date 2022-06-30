import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarPDFComponent } from './mostrar-pdf.component';

describe('MostrarPDFComponent', () => {
  let component: MostrarPDFComponent;
  let fixture: ComponentFixture<MostrarPDFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarPDFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarPDFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
