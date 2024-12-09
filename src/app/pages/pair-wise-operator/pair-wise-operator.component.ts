import { afterNextRender, Component } from '@angular/core';
import { of, pairwise, Subscription } from 'rxjs';

@Component({
  selector: 'app-pair-wise-operator',
  standalone: true,
  imports: [],
  templateUrl: './pair-wise-operator.component.html',
  styleUrl: './pair-wise-operator.component.scss',
})
export class PairWiseOperatorComponent {
  subscription!: Subscription;

  constructor() {
    afterNextRender(() => {
      this.subscription = of('a', 'b', 'c', 'd', 'e')
        .pipe(pairwise())
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
