import { afterNextRender, Component, OnDestroy } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subscription } from 'rxjs';

@Component({
  selector: 'app-replay-subject',
  standalone: true,
  imports: [],
  templateUrl: './replay-subject.component.html',
  styleUrl: './replay-subject.component.scss',
})
export class ReplaySubjectComponent implements OnDestroy {
  subscription!: Subscription;

  constructor() {
    afterNextRender(() => {
      // even error occurs, replay subject send value to every observer, this is not the case with behavior subject
      // it send all emitted value to every observer
      // it takes two parameter, first one tells, how many value it store in a buffer and second on says, for how many second it need to store in a buffer

      let replaySubject = new ReplaySubject(2, 1000);
      // let replaySubject = new BehaviorSubject(0)

      replaySubject.next(1);

      this.subscription = replaySubject.subscribe({
        next: (data) => console.log('Observer 1 ' + data),
      });

      replaySubject.next(2);
      replaySubject.next(3);

      this.subscription = replaySubject.subscribe({
        next: (data) => console.log('Observer 2 ' + data),
      });

      replaySubject.next(4);
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
