import { afterNextRender, Component, OnDestroy } from '@angular/core';
import { interval, Subscription, take } from 'rxjs';

@Component({
  selector: 'app-take-operator',
  standalone: true,
  imports: [],
  templateUrl: './take-operator.component.html',
  styleUrl: './take-operator.component.scss',
})
export class TakeOperatorComponent implements OnDestroy {
  subscription!: Subscription;

  constructor() {
    afterNextRender(() => {
      this.subscription = interval(1000)
        .pipe(take(5))
        .subscribe({
          next: (data) => console.log(data),
          complete: () => console.log('Completed'),
        });
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
