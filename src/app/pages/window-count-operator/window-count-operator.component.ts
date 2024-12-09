import { afterNextRender, Component } from '@angular/core';
import { interval, mergeAll, Subscription, take, toArray, windowCount } from 'rxjs';

@Component({
  selector: 'app-window-count-operator',
  standalone: true,
  imports: [],
  templateUrl: './window-count-operator.component.html',
  styleUrl: './window-count-operator.component.scss',
})
export class WindowCountOperatorComponent {
  subscription!: Subscription;

  constructor() {
    afterNextRender(() => {
      this.subscription = interval(500)
        .pipe(take(30), windowCount(3, 2), mergeAll())
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
