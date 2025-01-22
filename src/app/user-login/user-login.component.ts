import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

interface UserForm {
  name: FormControl<string>
  age: FormControl<number>
  email: FormControl<string>
}

@Component({
  selector: 'app-user-login',
  imports: [ReactiveFormsModule],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.scss'
})
export class UserLoginComponent {
  userLoginForm = new FormGroup<UserForm>({
    name: new FormControl(),
    age: new FormControl(),
    email: new FormControl()
  })

  onSubmit() {
    console.log(this.userLoginForm.value)
  }
}
