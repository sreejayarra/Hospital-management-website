import { TestBed } from '@angular/core/testing';

import { DoctorslistserviceService } from './doctorslistservice.service';

describe('DoctorslistserviceService', () => {
  let service: DoctorslistserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctorslistserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
