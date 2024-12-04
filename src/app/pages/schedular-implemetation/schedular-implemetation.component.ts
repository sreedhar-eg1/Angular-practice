import { afterNextRender, Component, OnDestroy } from '@angular/core';
import {
  asapScheduler,
  asyncScheduler,
  merge,
  of,
  queueScheduler,
  Subscription,
} from 'rxjs';

@Component({
  selector: 'app-schedular-implemetation',
  standalone: true,
  imports: [],
  templateUrl: './schedular-implemetation.component.html',
  styleUrl: './schedular-implemetation.component.scss',
})
export class SchedularImplemetationComponent implements OnDestroy {
  subscription!: Subscription;

  constructor() {
    afterNextRender(() => {
      let queueschedular$ = of('queue schedular', queueScheduler);
      let asyncschedular$ = of('async schedular', asyncScheduler);
      let asapSchedular$ = of('asap schedular', asapScheduler);

      this.subscription = merge(
        queueschedular$,
        asyncschedular$,
        asapSchedular$
      ).subscribe({
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
