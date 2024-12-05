import { afterNextRender, Component } from '@angular/core';
import { findIndex, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-find-index-operator',
  standalone: true,
  imports: [],
  templateUrl: './find-index-operator.component.html',
  styleUrl: './find-index-operator.component.scss',
})
export class FindIndexOperatorComponent {
  subscription!: Subscription;

  constructor() {
    afterNextRender(() => {
      this.subscription = of(1, 2, 3, 4, 5, 6)
        .pipe(findIndex((val) => val % 5 == 0))
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
