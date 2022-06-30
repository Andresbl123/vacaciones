import { TestBed } from '@angular/core/testing';

import { ServicesVacaciService } from './services-vacaci.service';

describe('ServicesVacaciService', () => {
  let service: ServicesVacaciService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesVacaciService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
