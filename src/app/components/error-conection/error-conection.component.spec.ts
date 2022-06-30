import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorConectionComponent } from './error-conection.component';

describe('ErrorConectionComponent', () => {
  let component: ErrorConectionComponent;
  let fixture: ComponentFixture<ErrorConectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorConectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorConectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
