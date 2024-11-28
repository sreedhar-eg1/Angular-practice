import { afterNextRender, Component, OnDestroy } from '@angular/core';
import { Subscription, of, single } from 'rxjs';

@Component({
  selector: 'app-single-operator',
  standalone: true,
  imports: [],
  templateUrl: './single-operator.component.html',
  styleUrl: './single-operator.component.scss',
})
export class SingleOperatorComponent implements OnDestroy {
  subscription!: Subscription;

  constructor() {
    afterNextRender(() => {
      this.subscription = of(1)
        .pipe(single())
        .subscribe({
          next: (num) => console.log(num),
          error: (err) => console.log(err),
        });
      this.subscription = of(1, 2, 4)
        .pipe(single((val) => val % 2 === 0))
        .subscribe({
          next: (num) => console.log(num),
          error: (err) => console.log(err),
        });
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
