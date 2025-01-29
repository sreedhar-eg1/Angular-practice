import { Component, input, OnInit } from '@angular/core';
import { QuestionBase } from '../question.base';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form-question',
  imports: [ReactiveFormsModule],
  templateUrl: './dynamic-form-question.component.html',
  styleUrl: './dynamic-form-question.component.scss',
})
export class DynamicFormQuestionComponent implements OnInit {
  question = input.required<QuestionBase<string>>();
  form = input<FormGroup>();

  ngOnInit(): void {
  }

  get isValid() {
    return this.form()!.controls[this.question().key].invalid
  }
}
