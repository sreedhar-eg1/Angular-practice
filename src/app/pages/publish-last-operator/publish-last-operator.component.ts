import { afterNextRender, Component, OnDestroy } from '@angular/core';
import { AsyncSubject, connectable, ConnectableObservable, interval, publishLast, Subscription, take } from 'rxjs';

@Component({
  selector: 'app-publish-last-operator',
  standalone: true,
  imports: [],
  templateUrl: './publish-last-operator.component.html',
  styleUrl: './publish-last-operator.component.scss'
})
export class PublishLastOperatorComponent implements OnDestroy {
  subscription!: Subscription;

  constructor() {
    afterNextRender(() => {
      // similar to multicast, publish which related to subject, this publishLast operator is for async subject
      // Emit the last value after the observable is completed
      // convert cold observable to hot observable, it is deprecated
      // let source$ = interval(1000).pipe(take(5), publishLast()) as ConnectableObservable<number>;

      // this.subscription = source$.subscribe({
      //   next: (data) => console.log(data),
      // });

      // setTimeout(() => {
      //   this.subscription = source$.subscribe({
      //     next: (data) => console.log(data),
      //   });
      // }, 3000);

      // source$.connect()

      // use of connectable because publishLast is deprecated
      let source$ = connectable(interval(1000).pipe(take(5)), {
        connector: () => new AsyncSubject()
      })

      this.subscription = source$.subscribe({
        next: (data) => console.log(data),
      });

      setTimeout(() => {
        this.subscription = source$.subscribe({
          next: (data) => console.log(data),
        });
      }, 3000);

      source$.connect()
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
