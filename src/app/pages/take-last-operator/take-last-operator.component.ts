import { afterNextRender, Component, OnDestroy } from '@angular/core';
import { Subscription, interval, take, takeLast } from 'rxjs';

@Component({
  selector: 'app-take-last-operator',
  standalone: true,
  imports: [],
  templateUrl: './take-last-operator.component.html',
  styleUrl: './take-last-operator.component.scss'
})
export class TakeLastOperatorComponent implements OnDestroy {
  subscription!: Subscription;

  constructor() {
    afterNextRender(() => {
      this.subscription = interval(100)
        .pipe(take(10), takeLast(5))
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
