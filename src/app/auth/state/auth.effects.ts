import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../../services/auth.service';
import {
  loginStart,
  lognSuccess,
  signupStart,
  signupSuccess,
  autoLogin,
  logout,
} from './auth.actions';
import {
  catchError,
  exhaustMap,
  map,
  mergeMap,
  of,
  switchMap,
  tap,
} from 'rxjs';
import { AppState } from '../../store/app.state';
import { Store } from '@ngrx/store';
import { setErrorMessage, setLoading } from '../../store/shared/shared.actions';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffect {
  constructor(
    private action$: Actions,
    private authService: AuthService,
    private store: Store<AppState>,
    private router: Router
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
            this.authService.setUserInLocalStorage(user);
            return lognSuccess({ user, redirect: true });
          })
        );
      }),
      catchError((errorResponse) => {
        this.store.dispatch(setLoading({ spinner: false }));

        const errorMessage = this.authService.formatErrorMessage(
          errorResponse.error.error.message
        );

        return of(setErrorMessage({ message: errorMessage }));
      })
    );
  });

  // loginRedirect$ = createEffect(
  //   () => {
  //     return this.action$.pipe(
  //       ofType(lognSuccess),
  //       tap((action) => this.router.navigate(['/']))
  //     );
  //   },
  //   { dispatch: false }
  // );

  signUp$ = createEffect(() => {
    return this.action$.pipe(
      ofType(signupStart),
      exhaustMap((action) => {
        return this.authService.signup(action.email, action.password).pipe(
          map((data) => {
            this.store.dispatch(setLoading({ spinner: false }));
            this.store.dispatch(setErrorMessage({ message: '' }));
            const user = this.authService.formatUser(data);
            this.authService.setUserInLocalStorage(user);
            return signupSuccess({ user, redirect: true });
          })
        );
      }),
      catchError((errResponse) => {
        this.store.dispatch(setLoading({ spinner: false }));
        const error = this.authService.formatErrorMessage(
          errResponse.error.error.message
        );
        return of(setErrorMessage({ message: error }));
      })
    );
  });

  // signUpRedirect$ = createEffect(() => {
  //   return this.action$.pipe(
  //     ofType(signupSuccess),
  //     tap((action) => {
  //       this.router.navigate(['/'])
  //     })
  //   )
  // }, {dispatch: false})

  //If we have same logic with different action then we can use array with ofType
  redirect$ = createEffect(
    () => {
      return this.action$.pipe(
        ofType(...[lognSuccess, signupSuccess]),
        tap((action) => {
          if (action.redirect) {
            this.router.navigate(['/']);
          }
        })
      );
    },
    { dispatch: false }
  );

  autoLogin$ = createEffect(() => {
    return this.action$.pipe(
      ofType(autoLogin),
      mergeMap((action) => {
        const user = this.authService.getUserFromLocalStorage()!;
        return of(lognSuccess({ user, redirect: false }));
      })
    );
  });

  logout$ = createEffect(
    () => {
      return this.action$.pipe(
        ofType(logout),
        map((action) => {
          this.authService.logout();
          this.router.navigate(['/auth']);
        })
      );
    },
    { dispatch: false }
  );
}
