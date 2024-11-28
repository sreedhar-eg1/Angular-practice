import { afterNextRender, Component } from '@angular/core';
import { Subscription, interval, take, skip, of, skipLast } from 'rxjs';

@Component({
  selector: 'app-skip-last',
  standalone: true,
  imports: [],
  templateUrl: './skip-last.component.html',
  styleUrl: './skip-last.component.scss',
})
export class SkipLastComponent {
  subscription!: Subscription;

  constructor() {
    afterNextRender(() => {
      // this.subscription = of(1, 2, 3, 4, 5, 6, 7)
      //   .pipe(skipLast(3))
      //   .subscribe({
      //     next: (num) => console.log(num),
      //   });

      this.subscription = interval(500)
        .pipe(skipLast(10))
        .subscribe({
          next: (num) => console.log(num),
          error: (err) => console.log(err),
          complete: () => console.log('Completed'),
        });
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
