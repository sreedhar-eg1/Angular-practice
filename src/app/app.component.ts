import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormComponent } from "./reactive-form/reactive-form.component";
import { TemplateFormComponent } from "./template-form/template-form.component";
import { NameEditorComponent } from "./name-editor/name-editor.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormComponent, TemplateFormComponent, NameEditorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-19-forms';
}
