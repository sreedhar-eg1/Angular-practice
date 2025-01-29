import { Injectable } from '@angular/core';
import { QuestionBase } from './question.base';
import { Dropdown } from './question.dropdown';
import { TextBox } from './question.textbox';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  constructor() {}

  getQuestions() {
    const questions: QuestionBase<string>[] = [
      new Dropdown({
        key: 'favoriteAnimal',
        label: 'Favorite Animal',
        order: 3,
        options: [
          { key: 'cat', value: 'Cat' },
          { key: 'dog', value: 'Dog' },
          { key: 'horse', value: 'Horse' },
          { key: 'tiger', value: 'Tiger' },
        ],
      }),
      new TextBox({
        key: 'firstName',
        label: 'First Name',
        value: 'Sreedhar',
        required: true,
        order: 1,
      }),
      new TextBox({
        key: 'email',
        label: 'Email',
        type: 'email',
        order: 2,
      }),
    ];

    return of(questions.sort((a, b) => a.order - b.order));
  }
}
