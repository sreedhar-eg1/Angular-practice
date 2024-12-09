import { afterNextRender, Component } from '@angular/core';
import { interval, mergeMap, Subscription, take, toArray, window } from 'rxjs';

@Component({
  selector: 'app-window-operator',
  standalone: true,
  imports: [],
  templateUrl: './window-operator.component.html',
  styleUrl: './window-operator.component.scss',
})
export class WindowOperatorComponent {
  subscription!: Subscription;

  constructor() {
    afterNextRender(() => {
      this.subscription = interval(500)
        .pipe(take(100), window(interval(2000).pipe(take(50))), mergeMap((val) => val.pipe(toArray())))
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
