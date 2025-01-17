import { AfterViewInit, Component, signal, viewChild } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  imports: [FormsModule],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.scss'
})
export class TemplateFormComponent implements AfterViewInit {
  colorInputElement = viewChild<NgModel>('colorInput')

  favoriteColor = signal('')

  ngAfterViewInit(): void {
      this.colorInputElement()?.valueChanges?.subscribe({
        next: (color) => console.log(color)
      })
  }
}
