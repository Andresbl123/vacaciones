import { TestBed } from '@angular/core/testing';

import { ServicePDFService } from './service-pdf.service';

describe('ServicePDFService', () => {
  let service: ServicePDFService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicePDFService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
