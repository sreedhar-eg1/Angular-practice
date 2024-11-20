import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppState } from '../../store/app.state';
import { Store } from '@ngrx/store';
import { signupStart } from '../state/auth.actions';
import { setLoading } from '../../store/shared/shared.actions';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  signupForm = new FormGroup({
    email: new FormControl('', {validators: [Validators.required, Validators.email]}),
    password: new FormControl('', {validators: [Validators.required, Validators.minLength(4), Validators.maxLength(15)]})
  })

  constructor(private store: Store<AppState>) {}

  onSubmit() {
    if (this.signupForm.invalid) {
      return
    }

    const email = this.signupForm.value.email!
    const password = this.signupForm.value.password!
    
    this.store.dispatch(setLoading({spinner: true}))
    this.store.dispatch(signupStart({email, password}))
  }
}
