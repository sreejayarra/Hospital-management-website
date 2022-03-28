import { TestBed } from '@angular/core/testing';

import { ExcellenceService } from './excellence.service';

describe('ExcellenceService', () => {
  let service: ExcellenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExcellenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
