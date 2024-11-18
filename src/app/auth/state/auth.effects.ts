import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../../services/auth.service';
import { loginStart, lognSuccess } from './auth.actions';
import { exhaustMap, map } from 'rxjs';

@Injectable()
export class AuthEffect {
  constructor(private action$: Actions, private authService: AuthService) {}

  login$ = createEffect(() => {
    return this.action$.pipe(
      ofType(loginStart),
      exhaustMap((action) => {
        return this.authService
          .login(action.email, action.password)
          .pipe(map((data) => {
            const user = this.authService.formatUser(data)
            console.log(user)
            return lognSuccess({user})
          }));
      })
    );
  });
}
