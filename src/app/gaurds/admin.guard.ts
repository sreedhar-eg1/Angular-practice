import { inject } from '@angular/core';
import { CanMatchFn } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

export const adminGuard: CanMatchFn = (route, segments) => {
  const authenticationService = inject(AuthenticationService)
  return authenticationService.getRole() === 'admin';
};
