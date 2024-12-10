import { TestBed } from '@angular/core/testing';

import { PostDeclarativeService } from './post-declarative.service';

describe('PostDeclarativeService', () => {
  let service: PostDeclarativeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostDeclarativeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
