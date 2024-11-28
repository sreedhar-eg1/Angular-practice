import { afterNextRender, Component, OnDestroy } from '@angular/core';
import { Subscription, interval, skip, take, takeWhile } from 'rxjs';

@Component({
  selector: 'app-skip-operator',
  standalone: true,
  imports: [],
  templateUrl: './skip-operator.component.html',
  styleUrl: './skip-operator.component.scss',
})
export class SkipOperatorComponent implements OnDestroy {
  subscription!: Subscription;

  constructor() {
    afterNextRender(() => {
      this.subscription = interval(500)
        .pipe(take(20), skip(10))
        .subscribe({
          next: (num) => console.log(num),
          error: (err) => console.log(err),
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
