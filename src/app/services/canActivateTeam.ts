import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { PermissionService, userToken } from './permission.service';

export const TeamGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const router = inject(Router);
  const permissionService = inject(PermissionService);

  return permissionService.isTeamPresent(userToken, route.paramMap.get('id')!);
};
