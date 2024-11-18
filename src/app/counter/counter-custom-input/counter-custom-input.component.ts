import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../counter/state/counter.state';
import { customIncrement } from '../counter/state/counter.actions';
import { AppState } from '../../store/app.state';

@Component({
  selector: 'app-counter-custom-input',
  templateUrl: './counter-custom-input.component.html',
  styleUrl: './counter-custom-input.component.css'
})
export class CounterCustomInputComponent {
  value!: number;

  constructor(private store: Store<AppState>) {}

  onAdd() {
    this.store.dispatch(customIncrement({count: +this.value}))
  }

}
