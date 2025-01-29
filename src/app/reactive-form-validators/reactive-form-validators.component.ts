import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { forbidName } from './forbidName.validator';
import { mustNotMatch } from './mustNotMatch.validator';
import { uniqueRoleValidator } from './unique-role.validator';
import { ReactiveActorService } from './reactive-actor.service';

@Component({
  selector: 'app-reactive-form-validators',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form-validators.component.html',
  styleUrl: './reactive-form-validators.component.scss',
})
export class ReactiveFormValidatorsComponent {
  private actorService = inject(ReactiveActorService)

  actorForm = new FormGroup(
    {
      name: new FormControl('', {
        validators: [
          Validators.required,
          Validators.minLength(4),
          forbidName(new RegExp('sreedhar')),
        ],
      }),
      role: new FormControl('', {
        validators: [Validators.required],
        asyncValidators: [uniqueRoleValidator(this.actorService)],
        updateOn: 'blur'
      }),
      skill: new FormControl('', { validators: [Validators.required] }),
    },
    { validators: [mustNotMatch] }
  );

  get name() {
    return this.actorForm.controls.name;
  }

  get role() {
    return this.actorForm.controls.role
  }

  get skill() {
    return this.actorForm.get('skill')!;
  }

  onSubmit() {
    console.log(this.actorForm);
  }
}
