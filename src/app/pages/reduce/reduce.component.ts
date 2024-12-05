import { afterNextRender, Component } from '@angular/core';
import { of, reduce, scan, Subscription } from 'rxjs';

@Component({
  selector: 'app-reduce',
  standalone: true,
  imports: [],
  templateUrl: './reduce.component.html',
  styleUrl: './reduce.component.scss',
})
export class ReduceComponent {
  subscription!: Subscription;

  constructor() {
    afterNextRender(() => {
      this.subscription = of(1, 2, 3, 4, 5)
        .pipe(reduce((acc, val) => acc + val, 0))
        .subscribe({
          next: (data) => console.log(data),
        });

      //Using scan, where scan emit after each calculation, whereas reduce emit after the source observable is complete
      this.subscription = of(1, 2, 3, 4, 5)
        .pipe(scan((acc, val) => acc + val, 0))
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
