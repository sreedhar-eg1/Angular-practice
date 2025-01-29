import { TestBed } from '@angular/core/testing';

import { ReactiveActorService } from './reactive-actor.service';

describe('ReactiveActorService', () => {
  let service: ReactiveActorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReactiveActorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
