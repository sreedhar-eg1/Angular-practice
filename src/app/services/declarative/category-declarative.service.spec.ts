import { TestBed } from '@angular/core/testing';

import { CategoryDeclarativeService } from './category-declarative.service';

describe('CategoryDeclarativeService', () => {
  let service: CategoryDeclarativeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryDeclarativeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
