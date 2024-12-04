import { afterNextRender, Component, OnDestroy } from '@angular/core';
import {
  connectable,
  ConnectableObservable,
  interval,
  multicast,
  Subject,
  Subscription,
  take,
} from 'rxjs';

@Component({
  selector: 'app-multicast-operator',
  standalone: true,
  imports: [],
  templateUrl: './multicast-operator.component.html',
  styleUrl: './multicast-operator.component.scss',
})
export class MulticastOperatorComponent implements OnDestroy {
  subscription!: Subscription;

  constructor() {
    afterNextRender(() => {
      //Using multicast operator(deprecated)
      // let source = interval(1000).pipe(
      //   take(5),
      //   multicast(new Subject())
      // ) as ConnectableObservable<number>;

      // this.subscription = source.subscribe({
      //   next: (num) => console.log(num),
      // });

      // setTimeout(() => {
      //   this.subscription = source.subscribe({
      //     next: (num) => console.log(num),
      //   });
      // }, 2000);

      // source.connect();

      //using connectable
      let source = connectable(interval(1000).pipe(take(7)));

      this.subscription = source.subscribe({
        next: (num) => console.log(num),
      });

      setTimeout(() => {
        this.subscription = source.subscribe({
          next: (num) => console.log(num),
        });
      }, 2000);

      source.connect();
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
