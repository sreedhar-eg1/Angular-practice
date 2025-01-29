import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function forbidName(forbiddenName: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = forbiddenName.test(control.value);
    return forbidden ? { forbidden: { value: control.value } } : null;
  };
}
