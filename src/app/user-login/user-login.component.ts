import { Component, OnInit } from '@angular/core';
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
export class UserLoginComponent implements OnInit {
  userLoginForm = new FormGroup({
    name: new FormControl('', {nonNullable: true}),
    age: new FormControl(null, {nonNullable: true}),
    email: new FormControl('', {nonNullable: true})
  })

  ngOnInit(): void {
      console.log('On resetting the form the form value will be null - which is nullable control');
      console.log('We can make it to non nullable, by setting non nullable object to true');
  }

  onSubmit() {
    console.log(this.userLoginForm.value)
  }

  onReset() {
    console.log(this.userLoginForm.value)
    this.userLoginForm.reset()
    console.log(this.userLoginForm.value)
  }
}
