import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { AuthResponseData } from '../models/authResponseData.model';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

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
}
