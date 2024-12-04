import { afterNextRender, Component } from '@angular/core';
import { interval, map, race, Subscription, take } from 'rxjs';

@Component({
  selector: 'app-race',
  standalone: true,
  imports: [],
  templateUrl: './race.component.html',
  styleUrl: './race.component.scss',
})
export class RaceComponent {
  subscription!: Subscription;

  constructor() {
    afterNextRender(() => {
      let source1$ = interval(1000).pipe(
        take(5),
        map((v) => 'first ' + v)
      );
      let source2$ = interval(2000).pipe(
        take(5),
        map((v) => 'second ' + v)
      );
      let source3$ = interval(3000).pipe(
        take(5),
        map((v) => 'third ' + v)
      );

      this.subscription = race(source2$, source1$, source3$).subscribe({
        next: (data) => console.log(data),
      });
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe;
    }
  }
}
