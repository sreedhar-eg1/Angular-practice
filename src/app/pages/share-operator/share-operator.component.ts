import { afterNextRender, Component, OnDestroy } from '@angular/core';
import {
  Subscription,
  interval,
  take,
  multicast,
  Subject,
  ConnectableObservable,
  publish,
  refCount,
  share,
} from 'rxjs';

@Component({
  selector: 'app-share-operator',
  standalone: true,
  imports: [],
  templateUrl: './share-operator.component.html',
  styleUrl: './share-operator.component.scss',
})
export class ShareOperatorComponent implements OnDestroy {
  subscription!: Subscription;

  constructor() {
    afterNextRender(() => {
      // multicast,publish, refCount all are deprecated, instead use share

      //Using multicast, need to pass subject
      // let source = interval(1000).pipe(
      //   take(5),
      //   multicast(new Subject())
      // ) as ConnectableObservable<number>;

      // Using publish, dont need to pass subject
      // let source = interval(1000).pipe(take(5), publish())as ConnectableObservable<number>;

      //if we want to remove connect() after every observer subscribed, then we can use refCount()
      // let source = interval(1000).pipe(take(5), publish(), refCount());

      // use of share()
      let source = interval(1000).pipe(take(5), share());

      this.subscription = source.subscribe({
        next: (num) => console.log(num),
      });

      setTimeout(() => {
        this.subscription = source.subscribe({
          next: (num) => console.log(num),
        });
      }, 2000);

      // with refCount(), the connect is not required, when any observer subscribe, it will start emitting data
      // source.connect();
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
