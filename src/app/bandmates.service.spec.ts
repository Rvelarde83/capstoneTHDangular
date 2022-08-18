import { TestBed } from '@angular/core/testing';

import { BandmatesService } from './bandmates.service';

describe('BandmatesService', () => {
  let service: BandmatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BandmatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
