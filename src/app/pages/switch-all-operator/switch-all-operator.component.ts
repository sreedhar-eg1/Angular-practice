import { afterNextRender, Component } from '@angular/core';
import { interval, map, Subscription, switchAll, take } from 'rxjs';

@Component({
  selector: 'app-switch-all-operator',
  standalone: true,
  imports: [],
  templateUrl: './switch-all-operator.component.html',
  styleUrl: './switch-all-operator.component.scss',
})
export class SwitchAllOperatorComponent {
  subscription!: Subscription;

  constructor() {
    afterNextRender(() => {
      this.subscription = interval(1000)
        .pipe(
          take(5),
          map((val) =>
            interval(500).pipe(
              map((n) => {
                console.log(`parent value ${val} : child value ${n}`);
                return n;
              }),
              take(4)
            )
          ),
          switchAll()
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
