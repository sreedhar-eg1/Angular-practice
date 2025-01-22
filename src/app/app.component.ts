import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormComponent } from "./reactive-form/reactive-form.component";
import { TemplateFormComponent } from "./template-form/template-form.component";
import { NameEditorComponent } from "./name-editor/name-editor.component";
import { UserLoginComponent } from "./user-login/user-login.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormComponent, TemplateFormComponent, NameEditorComponent, UserLoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-19-forms';
}
