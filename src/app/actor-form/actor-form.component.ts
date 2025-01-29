import { Component, signal, viewChild } from '@angular/core';
import { Actor } from './actor';
import { FormsModule, NgForm } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { ForbiddenNameDirective } from './forbidden-name.directive';
import { MustNotMatchTempDirective } from './must-not-match-temp.directive';
import { UniqueRoletempDirective } from './unique-roletemp.directive';

@Component({
  selector: 'app-actor-form',
  imports: [FormsModule, JsonPipe, ForbiddenNameDirective, MustNotMatchTempDirective, UniqueRoletempDirective],
  templateUrl: './actor-form.component.html',
  styleUrl: './actor-form.component.scss',
})
export class ActorFormComponent {
  actorForm = viewChild<NgForm>('actorForm');

  skills = ['Method Acting', 'Singing', 'Dancing', 'Sword Fighting'];
  submitted = signal(false);

  model = new Actor(18, 'Tom Cruise', this.skills[3], 'role 1','CW Production');

  onSubmit(form: NgForm) {
    this.submitted.set(true);
    console.log(form);
    console.log(this.actorForm());
    console.log(form.value);
  }

  onAddActor() {
    this.model = new Actor(0, '', '', '', '');
  }
}
