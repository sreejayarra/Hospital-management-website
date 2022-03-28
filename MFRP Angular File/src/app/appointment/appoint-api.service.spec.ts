import { TestBed } from '@angular/core/testing';

import { AppointApiService } from './appoint-api.service';

describe('AppointApiService', () => {
  let service: AppointApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppointApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
