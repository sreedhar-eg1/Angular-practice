import { afterNextRender, Component } from '@angular/core';
import { exhaustAll, interval, map, skip, Subscription, take } from 'rxjs';

@Component({
  selector: 'app-exhaust-all-operator',
  standalone: true,
  imports: [],
  templateUrl: './exhaust-all-operator.component.html',
  styleUrl: './exhaust-all-operator.component.scss',
})
export class ExhaustAllOperatorComponent {
  subscription!: Subscription;

  constructor() {
    afterNextRender(() => {
      this.subscription = interval(1000)
        .pipe(
          skip(1),
          map((value) =>
            interval(500).pipe(
              skip(1),
              map((val) => {
                console.log(`parent value ${value}: child value ${val}`)
                return val
              }
              ),
              take(3)
            )
          ),
          exhaustAll(),
          take(4)
        )
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
