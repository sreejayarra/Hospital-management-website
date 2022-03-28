import { TestBed } from '@angular/core/testing';

import { TestseditserviceService } from './testseditservice.service';

describe('TestseditserviceService', () => {
  let service: TestseditserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestseditserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
