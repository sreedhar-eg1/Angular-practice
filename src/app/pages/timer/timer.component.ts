import { afterNextRender, Component } from '@angular/core';
import { of, Subscription, switchMap, timer } from 'rxjs';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.scss',
})
export class TimerComponent {
  subscription!: Subscription;

  constructor() {
    afterNextRender(() => {
      // emit first value that is 0 after 1 second then it stop
      let source$ = timer(1000);

      // will emit value from 0 starting from 1 second and on 3 second interval it keeps on emitting the other value
      // let source$ = timer(1000, 3000)

      this.subscription = source$.subscribe({
        next: (data) => console.log(data),
      });

      timer(1000)
        .pipe(switchMap(() => of('a', 'b', 'c')))
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
