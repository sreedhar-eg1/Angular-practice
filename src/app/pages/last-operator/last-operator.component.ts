import { afterNextRender, Component } from '@angular/core';
import { Subscription, interval, last, of } from 'rxjs';

@Component({
  selector: 'app-last-operator',
  standalone: true,
  imports: [],
  templateUrl: './last-operator.component.html',
  styleUrl: './last-operator.component.scss',
})
export class LastOperatorComponent {
  subscription!: Subscription;

  constructor() {
    afterNextRender(() => {
      this.subscription = of(1, 2, 3, 4, 5, 6)
        .pipe(last())
        .subscribe({
          next: (num) => console.log(num),
        });

      this.subscription = of(1, 2, 3, 4, 5, 6)
        .pipe(last((value, index) => value % 2 === 0))
        .subscribe({
          next: (num) => console.log(num),
        });

        this.subscription = of(1,3,5)
        .pipe(last((value, index) => value % 2 === 0, 10))
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
