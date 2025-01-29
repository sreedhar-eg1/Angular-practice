import { Injectable } from '@angular/core';
import { QuestionBase } from './question.base';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class QuestionControlService {
  constructor() {}

  toFormGroup(questions: QuestionBase<string>[]) {
    console.log(questions);
    
    const group: any = {};

    questions.forEach((question) => {
      group[question.key] = question.required
        ? new FormControl(question.value || '', {
            validators: [Validators.required],
          })
        : new FormControl(question.value || '');
    });

    return new FormGroup(group)
  }
}
