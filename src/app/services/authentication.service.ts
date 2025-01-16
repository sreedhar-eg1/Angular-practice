import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private loggedIn = signal(false);

  constructor() {}

  hasPermission() {
    return false
  }

  isLoggedIn() {
    return this.loggedIn();
  }

  login() {
    this.loggedIn.set(true);
  }

  logout() {
    this.loggedIn.set(false);
  }
}
