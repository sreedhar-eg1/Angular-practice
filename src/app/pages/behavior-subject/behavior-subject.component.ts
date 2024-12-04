import { afterNextRender, Component, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-behavior-subject',
  standalone: true,
  imports: [],
  templateUrl: './behavior-subject.component.html',
  styleUrl: './behavior-subject.component.scss',
})
export class BehaviorSubjectComponent implements OnDestroy {
  subscription!: Subscription;

  constructor() {
    afterNextRender(() => {
      // Here subject dont ask for initial value, if any observer subscribe without any emitting, then nothing will be captured
      // where as behaviour subject can take initial value, and also it stores the recent emitted value, so if any observer subscribe then they get that value
      // let subject$ = new Subject()
      let subject$ = new BehaviorSubject(0)

      this.subscription = subject$.subscribe({
        next: (data) => console.log('Observer 1 ' + data)
      })

      subject$.next(1)

      this.subscription = subject$.subscribe({
        next: (data) => console.log('Observer 2 ' + data)
      })

      subject$.next(1)
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
