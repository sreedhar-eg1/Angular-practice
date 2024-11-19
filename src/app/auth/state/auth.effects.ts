import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../../services/auth.service';
import { loginStart, lognSuccess } from './auth.actions';
import { catchError, exhaustMap, map, of, switchMap, tap } from 'rxjs';
import { AppState } from '../../store/app.state';
import { Store } from '@ngrx/store';
import { setErrorMessage, setLoading } from '../../store/shared/shared.actions';

@Injectable()
export class AuthEffect {
  constructor(
    private action$: Actions,
    private authService: AuthService,
    private store: Store<AppState>
  ) {}

  login$ = createEffect(() => {
    return this.action$.pipe(
      ofType(loginStart),
      exhaustMap((action) => {
        return this.authService.login(action.email, action.password).pipe(
          map((data) => {
            const user = this.authService.formatUser(data);
            console.log(user);
            this.store.dispatch(setErrorMessage({ message: '' }));
            this.store.dispatch(setLoading({ spinner: false }));
            return lognSuccess({ user });
          })
        );
      }),
      catchError((errorResponse) => {
        console.error('Error during login:', errorResponse);
        this.store.dispatch(setLoading({ spinner: false }));

        const errorMessage = this.authService.formatErrorMessage(errorResponse.error.error.message);

        return of(setErrorMessage({ message: errorMessage }));
      })
    );
  });
}
