import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { AuthResponseData } from '../models/authResponseData.model';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { AppState } from '../store/app.state';
import { Store } from '@ngrx/store';
import { logout } from '../auth/state/auth.actions';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  timeOutInterval: any;

  constructor(private http: HttpClient, private store: Store<AppState>) {}

  getUserFromLocalStorage() {
    const userDetailString = localStorage.getItem('user');
    if (userDetailString) {
      const userData = JSON.parse(userDetailString);
      const expirationDate = new Date(userData.expirationDate);
      const user = new User(
        userData.email,
        userData.token,
        userData.localId,
        expirationDate
      );
      this.runTimeoutInterval(user);

      return user;
    }

    return null;
  }

  setUserInLocalStorage(user: User) {
    localStorage.setItem('user', JSON.stringify(user));

    this.runTimeoutInterval(user);
  }

  runTimeoutInterval(user: User) {
    const todaysDate = new Date().getTime();
    const expirationDate = user.getExpirationDate.getTime();

    const timeInterval = expirationDate - todaysDate;

    this.timeOutInterval = setTimeout(() => {
      this.store.dispatch(logout());
      //Logout or login using refresh token
    }, timeInterval);
  }

  login(email: string, password: string): Observable<AuthResponseData> {
    const body = {
      email,
      password,
      returnSecureToken: true,
    };

    return this.http.post<AuthResponseData>(
      environment.API_URL +
        `v1/accounts:signInWithPassword?key=${environment.FIRBASE_API_KEY}`,
      body
    );
  }

  signup(email: string, password: string) {
    const body = {
      email,
      password,
      returnSecureToken: true,
    };

    return this.http.post<AuthResponseData>(
      environment.API_URL +
        `v1/accounts:signUp?key=${environment.FIRBASE_API_KEY}`,
      body
    );
  }

  logout() {
    localStorage.removeItem('user');
    if (this.timeOutInterval) {
      clearTimeout(this.timeOutInterval);
      this.timeOutInterval = null;
    }
  }

  formatUser(data: AuthResponseData) {
    const expirationDate = new Date(
      new Date().getTime() + +data.expiresIn * 1000
    );

    const user = new User(
      data.email,
      data.idToken,
      data.localId,
      expirationDate
    );

    return user;
  }

  formatErrorMessage(message: string) {
    switch (message) {
      case 'EMAIL_NOT_FOUND':
        return 'Email Not Found.';
      case 'INVALID_PASSWORD':
        return 'Password is wrong.';
      case 'EMAIL_EXISTS':
        return 'Email already exists, please try with different email.';
      default:
        return 'Something went wrong';
    }
  }
}
