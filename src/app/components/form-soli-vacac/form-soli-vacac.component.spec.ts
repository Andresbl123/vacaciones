import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSoliVacacComponent } from './form-soli-vacac.component';

describe('FormSoliVacacComponent', () => {
  let component: FormSoliVacacComponent;
  let fixture: ComponentFixture<FormSoliVacacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSoliVacacComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSoliVacacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
