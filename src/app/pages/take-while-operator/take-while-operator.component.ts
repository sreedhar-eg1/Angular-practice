import { afterNextRender, Component, OnDestroy } from '@angular/core';
import { interval, Subscription, takeWhile } from 'rxjs';

@Component({
  selector: 'app-take-while-operator',
  standalone: true,
  imports: [],
  templateUrl: './take-while-operator.component.html',
  styleUrl: './take-while-operator.component.scss',
})
export class TakeWhileOperatorComponent implements OnDestroy {
  subscription!: Subscription;

  constructor() {
    afterNextRender(() => {
      this.subscription = interval(500)
        .pipe(takeWhile((num, ind) => num < 5, true))
        .subscribe({
          next: (num) => console.log(num),
          complete: () => console.log('Completed because of false condition in takewhile')
        });
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
