import { afterNextRender, Component, OnDestroy } from '@angular/core';
import { BehaviorSubject, connectable, ConnectableObservable, interval, publishBehavior, Subscription, take } from 'rxjs';

@Component({
  selector: 'app-publish-behavior-operator',
  standalone: true,
  imports: [],
  templateUrl: './publish-behavior-operator.component.html',
  styleUrl: './publish-behavior-operator.component.scss',
})
export class PublishBehaviorOperatorComponent implements OnDestroy {
  subscription!: Subscription;

  constructor() {
    afterNextRender(() => {
      // similar to multicast, publish which related to subject, this publishBehavior operator is for behavior subject
      // convert cold observable to hot observable, it is deprecated
      // let source$ = interval(1000).pipe(take(5), publishBehavior(100)) as ConnectableObservable<number>;

      // this.subscription = source$.subscribe({
      //   next: (data) => console.log(data),
      // });

      // setTimeout(() => {
      //   this.subscription = source$.subscribe({
      //     next: (data) => console.log(data),
      //   });
      // }, 3000);

      // source$.connect()

      // use of connectable because publishBehavior is deprecated
      let source$ = connectable(interval(1000).pipe(take(5)), {
        connector: () => new BehaviorSubject(100)
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
