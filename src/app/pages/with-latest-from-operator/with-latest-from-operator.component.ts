import { afterNextRender, Component } from '@angular/core';
import { interval, of, skip, Subscription, take, withLatestFrom } from 'rxjs';

@Component({
  selector: 'app-with-latest-from-operator',
  standalone: true,
  imports: [],
  templateUrl: './with-latest-from-operator.component.html',
  styleUrl: './with-latest-from-operator.component.scss',
})
export class WithLatestFromOperatorComponent {
  subscription!: Subscription;

  constructor() {
    afterNextRender(() => {
      this.subscription = interval(1000)
        .pipe(take(5), withLatestFrom(interval(500).pipe(skip(5), take(5))))
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
