import { TestBed } from '@angular/core/testing';

import { SolicitudesTramisteService } from './solicitudes-tramiste.service';

describe('SolicitudesTramisteService', () => {
  let service: SolicitudesTramisteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolicitudesTramisteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
