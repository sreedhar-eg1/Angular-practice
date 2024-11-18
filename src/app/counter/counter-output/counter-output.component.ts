import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../counter/state/counter.state';
import { Observable, Subscription } from 'rxjs';
import { getCounter } from '../counter/state/counter.selector';
import { AppState } from '../../store/app.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrl: './counter-output.component.css',
})
export class CounterOutputComponent implements OnInit, OnDestroy {
  counter!: number;
  counterSubscription!: Subscription;
  counter$!: Observable<number>

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    // this.counterSubscription = this.store
    //   .select('counter')
    //   .subscribe((counter) => {
    //     this.counter = counter.counter;
    //   });

    this.counter$ = this.store.select(getCounter)
  }

  ngOnDestroy(): void {
    if (this.counterSubscription) {
      this.counterSubscription.unsubscribe();
    }
  }
}
