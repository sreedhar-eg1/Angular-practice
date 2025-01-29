import { Component, inject, input, OnInit } from '@angular/core';
import { QuestionBase } from '../question.base';
import { QuestionControlService } from '../question-control.service';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DynamicFormQuestionComponent } from "../dynamic-form-question/dynamic-form-question.component";

@Component({
  selector: 'app-dynamic-form',
  imports: [ReactiveFormsModule, DynamicFormQuestionComponent],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss'
})
export class DynamicFormComponent implements OnInit {
  private questionControlService = inject(QuestionControlService)

  questions = input<QuestionBase<string>[]>([])

  form!: FormGroup

  ngOnInit(): void {
      this.form = this.questionControlService.toFormGroup(this.questions())
      
  }

  onSubmit() {
    console.log(this.form);
    
  }
}
