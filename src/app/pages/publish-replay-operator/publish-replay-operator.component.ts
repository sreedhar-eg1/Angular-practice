import { afterNextRender, Component } from '@angular/core';
import {
  Subscription,
  connectable,
  interval,
  take,
  AsyncSubject,
  publishReplay,
  ConnectableObservable,
  ReplaySubject,
  share,
} from 'rxjs';

@Component({
  selector: 'app-publish-replay-operator',
  standalone: true,
  imports: [],
  templateUrl: './publish-replay-operator.component.html',
  styleUrl: './publish-replay-operator.component.scss',
})
export class PublishReplayOperatorComponent {
  subscription!: Subscription;

  constructor() {
    afterNextRender(() => {
      // similar to multicast, publish which related to subject, this publishReplay operator is for replay subject
      // Emit the last value after the observable is completed
      // convert cold observable to hot observable, it is deprecated
      // let source$ = interval(1000).pipe(take(5), publishReplay()) as ConnectableObservable<number>;

      // this.subscription = source$.subscribe({
      //   next: (data) => console.log('Observer 1 ' + data),
      // });

      // setTimeout(() => {
      //   this.subscription = source$.subscribe({
      //     next: (data) => console.log('Observer 2 ' + data),
      //   });
      // }, 3000);

      // source$.connect()

      // use of share because publishLast is deprecated
      let source$ = interval(1000).pipe(
        take(5),
        share({ connector: () => new ReplaySubject() })
      );

      this.subscription = source$.subscribe({
        next: (data) => console.log('Observer 1 ' + data),
      });

      setTimeout(() => {
        this.subscription = source$.subscribe({
          next: (data) => console.log('Observer 2 ' + data),
        });
      }, 3000);
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
