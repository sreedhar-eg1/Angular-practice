import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { AppState } from '../store/app.state';
import { isAuthenticated } from '../auth/state/auth.selector';

export const AuthGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
):
  | boolean
  | UrlTree
  | Observable<boolean | UrlTree>
  | Promise<boolean | UrlTree> => {
  const router = inject(Router);
  const store = inject(Store<AppState>);

  return store.select(isAuthenticated).pipe(
    map((isAuthenticated) => {
      if (!isAuthenticated) {
        return router.createUrlTree(['auth']);
      }
      return true;
    })
  );
};
