import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

export const hasPermissionGuard: CanActivateChildFn = (childRoute, state) => {
  const authenticationService = inject(AuthenticationService);
  const router = inject(Router);

  if (authenticationService.hasPermission()) {
    return true;

  } else {
    router.navigate(['no-access'])
    return false
  }

};
