import { TestBed } from '@angular/core/testing';

import { SportsCarService } from './sports-car.service';

describe('SportsCarService', () => {
  let service: SportsCarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SportsCarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
