import { afterNextRender, Component } from '@angular/core';
import { interval, mergeMap, Subscription, take, windowToggle } from 'rxjs';

@Component({
  selector: 'app-window-toggle-operator',
  standalone: true,
  imports: [],
  templateUrl: './window-toggle-operator.component.html',
  styleUrl: './window-toggle-operator.component.scss',
})
export class WindowToggleOperatorComponent {
  subscription!: Subscription;

  constructor() {
    afterNextRender(() => {
      this.subscription = interval(500)
        .pipe(
          take(50),
          windowToggle(interval(1000), () => interval(1000)),
          mergeMap((val) => val)
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
