import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPagVacacComponent } from './form-pag-vacac.component';

describe('FormPagVacacComponent', () => {
  let component: FormPagVacacComponent;
  let fixture: ComponentFixture<FormPagVacacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPagVacacComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPagVacacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
