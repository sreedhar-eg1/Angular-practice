import { afterNextRender, Component, OnDestroy, OnInit } from '@angular/core';
import { range, Subscription } from 'rxjs';

@Component({
  selector: 'app-range',
  standalone: true,
  imports: [],
  templateUrl: './range.component.html',
  styleUrl: './range.component.scss',
})
export class RangeComponent implements OnDestroy {
  subscription!: Subscription;

  constructor() {
    afterNextRender(() => {
      let source$ = range(10, 10);

      this.subscription = source$.subscribe({
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
