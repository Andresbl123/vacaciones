import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicPagVacacComponent } from './solic-pag-vacac.component';

describe('SolicPagVacacComponent', () => {
  let component: SolicPagVacacComponent;
  let fixture: ComponentFixture<SolicPagVacacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicPagVacacComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicPagVacacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
