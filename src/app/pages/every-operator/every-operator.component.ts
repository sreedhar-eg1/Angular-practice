import { afterNextRender, Component } from '@angular/core';
import { every, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-every-operator',
  standalone: true,
  imports: [],
  templateUrl: './every-operator.component.html',
  styleUrl: './every-operator.component.scss',
})
export class EveryOperatorComponent {
  subscription!: Subscription;

  constructor() {
    afterNextRender(() => {
      this.subscription = of(1, 2, 3, 4, 5, 6)
        .pipe(every((val) => val % 5 === 0))
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
