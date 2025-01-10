import { Component, input } from '@angular/core';
import { Animal } from '../../models/animal.model';

@Component({
  selector: 'app-input-signals',
  imports: [],
  templateUrl: './input-signals.component.html',
  styleUrl: './input-signals.component.scss',
})
export class InputSignalsComponent {
  role = input.required({ alias: 'userRole' });
  // user = input.required<{ name: string; breed: string; type: string }>({
  //   transform: (value: any) => ({...value, newField: 'added'}) 
  // });
}
