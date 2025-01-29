import { Directive, input, OnInit } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';
import { forbiddenNameValidator } from './forbiddenName.validator';

@Directive({
  selector: '[appForbiddenName]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ForbiddenNameDirective,
      multi: true,
    },
  ],
})
export class ForbiddenNameDirective implements OnInit, Validator {
  appForbiddenName = input<string>();

  ngOnInit(): void {
    console.log(this.appForbiddenName());
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return this.appForbiddenName()
      ? forbiddenNameValidator(new RegExp(this.appForbiddenName()!))(control)
      : null;
  }
}
