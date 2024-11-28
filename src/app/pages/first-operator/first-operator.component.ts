import { afterNextRender, Component } from '@angular/core';
import { Subscription, first, interval, of } from 'rxjs';

@Component({
  selector: 'app-first-operator',
  standalone: true,
  imports: [],
  templateUrl: './first-operator.component.html',
  styleUrl: './first-operator.component.scss'
})
export class FirstOperatorComponent {
  subscription!: Subscription;

  constructor() {
    afterNextRender(() => {
      this.subscription = of(1,2,3,4,5,6)
        .pipe(first())
        .subscribe({
          next: (num) => console.log(num),
        });

        this.subscription = of(1,2,3,4,5,6)
        .pipe(first((value, index) => value % 2 === 0))
        .subscribe({
          next: (num) => console.log(num),
        });

        this.subscription = of(1,3,5)
        .pipe(first((value, index) => value % 2 === 0, 2))
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
