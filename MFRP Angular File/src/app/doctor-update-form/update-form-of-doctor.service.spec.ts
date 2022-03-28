import { TestBed } from '@angular/core/testing';

import { UpdateFormOfDoctorService } from './update-form-of-doctor.service';

describe('UpdateFormOfDoctorService', () => {
  let service: UpdateFormOfDoctorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateFormOfDoctorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
