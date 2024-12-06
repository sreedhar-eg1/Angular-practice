import { afterNextRender, Component } from '@angular/core';
import { interval, startWith, Subscription, take } from 'rxjs';

@Component({
  selector: 'app-starts-with-operator',
  standalone: true,
  imports: [],
  templateUrl: './starts-with-operator.component.html',
  styleUrl: './starts-with-operator.component.scss',
})
export class StartsWithOperatorComponent {
  subscription!: Subscription;

  constructor() {
    afterNextRender(() => {
      this.subscription = interval(1000)
        .pipe(take(5), startWith(999))
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
