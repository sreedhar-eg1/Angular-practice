import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from './state/counter.state';
import { changeName } from './state/counter.actions';
import { getName } from './state/counter.selector';
import { AppState } from '../../store/app.state';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {

  name: string = ''
  private store = inject(Store<AppState>)

  constructor() {
    this.store.select(getName).subscribe((name) => {
      console.log('Name changed')
      this.name = name
    })
  }

  changeName() {
    this.store.dispatch(changeName())
  }
}
