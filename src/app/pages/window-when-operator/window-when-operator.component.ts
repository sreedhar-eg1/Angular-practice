import { afterNextRender, Component } from '@angular/core';
import { interval, mergeMap, Subscription, take, toArray, windowWhen } from 'rxjs';

@Component({
  selector: 'app-window-when-operator',
  standalone: true,
  imports: [],
  templateUrl: './window-when-operator.component.html',
  styleUrl: './window-when-operator.component.scss',
})
export class WindowWhenOperatorComponent {
  subscription!: Subscription;

  constructor() {
    afterNextRender(() => {
      this.subscription = interval(500)
        .pipe(
          take(20),
          windowWhen(() => interval(2000)),
          mergeMap(val => val.pipe(toArray()))
        )
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
