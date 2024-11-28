import { afterNextRender, Component, OnDestroy } from '@angular/core';
import { Subscription, interval, throttle } from 'rxjs';

@Component({
  selector: 'app-throttle-operator',
  standalone: true,
  imports: [],
  templateUrl: './throttle-operator.component.html',
  styleUrl: './throttle-operator.component.scss',
})
export class ThrottleOperatorComponent implements OnDestroy {
  subscription!: Subscription;

  constructor() {
    // leading and trailing: if it is true then it will emit the first and last data during that particular duration
    afterNextRender(() => {
      this.subscription = interval(1000)
        .pipe(
          throttle((num) => interval(2000), { leading: true, trailing: true })
        )
        .subscribe({
          next: (num) => console.log(num),
        });
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
