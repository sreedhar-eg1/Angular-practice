import { afterNextRender, Component } from '@angular/core';
import { delay, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-delay-operator',
  standalone: true,
  imports: [],
  templateUrl: './delay-operator.component.html',
  styleUrl: './delay-operator.component.scss',
})
export class DelayOperatorComponent {
  subscription!: Subscription;

  constructor() {
    afterNextRender(() => {
      this.subscription = of(1, 2, 3, 4, 5)
        .pipe(delay(3000))
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
