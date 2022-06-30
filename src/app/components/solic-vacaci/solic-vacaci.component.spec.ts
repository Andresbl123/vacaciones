import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicVacaciComponent } from './solic-vacaci.component';

describe('SolicVacaciComponent', () => {
  let component: SolicVacaciComponent;
  let fixture: ComponentFixture<SolicVacaciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicVacaciComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicVacaciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
