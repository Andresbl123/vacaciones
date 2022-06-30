import { TestBed } from '@angular/core/testing';

import { DataRegistrosService } from './data-registros.service';

describe('DataRegistrosService', () => {
  let service: DataRegistrosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataRegistrosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
