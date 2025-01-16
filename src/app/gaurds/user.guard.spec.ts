import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { userGuard } from './user.guard';

describe('userGuard', () => {
  const executeGuard: CanDeactivateFn<unknown> = (...guardParameters) => 
      TestBed.runInInjectionContext(() => userGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
