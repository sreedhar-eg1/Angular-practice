import { Component, inject } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private authenticationService = inject(AuthenticationService)
  private router = inject(Router)

  onLogin() {
    this.authenticationService.login()
    this.router.navigate(['dashboard'])
  }
}
