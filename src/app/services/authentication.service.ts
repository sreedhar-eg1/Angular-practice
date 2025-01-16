import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private loggedIn = signal(false);

  private role = signal('admin')

  constructor() {}

  getRole() {
    return this.role()
  }

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
