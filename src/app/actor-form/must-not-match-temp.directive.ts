import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';
import { mustNotMatch } from '../reactive-form-validators/mustNotMatch.validator';

@Directive({
  selector: '[appMustNotMatchTemp]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: MustNotMatchTempDirective,
      multi: true,
    },
  ],
})
export class MustNotMatchTempDirective implements Validator {
  constructor() {}

  validate(control: AbstractControl): ValidationErrors | null {
    return mustNotMatch(control);
  }
}
