import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { FormRecordComponent } from './form-record/form-record.component';
import { ActorFormComponent } from './actor-form/actor-form.component';
import { ReactiveFormValidatorsComponent } from './reactive-form-validators/reactive-form-validators.component';
import { QuestionService } from './dynamic-form/question.service';
import { DynamicFormComponent } from './dynamic-form/dynamic-form/dynamic-form.component';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    ReactiveFormComponent,
    TemplateFormComponent,
    NameEditorComponent,
    UserLoginComponent,
    FormRecordComponent,
    ActorFormComponent,
    ReactiveFormValidatorsComponent,
    DynamicFormComponent,
    AsyncPipe,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  private questionService = inject(QuestionService);
  title = 'angular-19-forms';

  questions$ = this.questionService.getQuestions();

  ngOnInit(): void {
      this.questions$.subscribe({
        next: (res) => {
          console.log(res)
        }
      })
  }

}
