import { Directive, inject } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { ReactiveActorService } from '../reactive-form-validators/reactive-actor.service';
import { uniqueRoleValidator } from '../reactive-form-validators/unique-role.validator';

@Directive({
  selector: '[appUniqueRoletemp]',
  providers: [
    {provide: NG_ASYNC_VALIDATORS, useExisting: UniqueRoletempDirective, multi: true}
  ]
})
export class UniqueRoletempDirective implements AsyncValidator {
  private actorService = inject(ReactiveActorService)

  constructor() { }

  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
      return uniqueRoleValidator(this.actorService)(control)
  }
}
