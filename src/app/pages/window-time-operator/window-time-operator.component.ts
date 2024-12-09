import { afterNextRender, Component } from '@angular/core';
import { interval, mergeMap, Subscription, take, toArray, windowTime } from 'rxjs';

@Component({
  selector: 'app-window-time-operator',
  standalone: true,
  imports: [],
  templateUrl: './window-time-operator.component.html',
  styleUrl: './window-time-operator.component.scss',
})
export class WindowTimeOperatorComponent {
  subscription!: Subscription;

  constructor() {
    afterNextRender(() => {
      this.subscription = interval(500)
        .pipe(take(50), windowTime(2000, 1000), mergeMap(val => val.pipe(toArray())))
        .subscribe({
          next: (data) => console.log(data),
        });
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
