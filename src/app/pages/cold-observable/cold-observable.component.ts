import { afterNextRender, Component, OnDestroy } from '@angular/core';
import { fromEvent, interval, Observable, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-cold-observable',
  standalone: true,
  imports: [],
  templateUrl: './cold-observable.component.html',
  styleUrl: './cold-observable.component.scss',
})
export class ColdObservableComponent implements OnDestroy {
  subscription!: Subscription;

  constructor() {
    afterNextRender(() => {
      //Cold Oservable - data is sent inside the observable and on each subscribe observable is executed each time
      let myObservable$ = new Observable((observer) => {
        observer.next(Math.random());
      });

      this.subscription = myObservable$.subscribe({
        next: (num) => console.log('Observable 1 ' + num),
      });

      this.subscription = myObservable$.subscribe({
        next: (num) => console.log('Observable 2 ' + num),
      });

      //Hot Observable - value is sent from outside the observable, and also value is sent to all the observer at a time(not executed multiple time)
      let documentEvent$ = fromEvent(document, 'click');

      this.subscription = documentEvent$.subscribe({
        next: (event: Event) =>
          console.log('Event 1 ' + (event as PointerEvent).clientX),
      });

      this.subscription = documentEvent$.subscribe({
        next: (event: Event) =>
          console.log('Event 2 ' + (event as PointerEvent).clientX),
      });

      //Converting cold observable to hot observable using subject

      let intervalObs$ = interval(1000)
      let subject$ = new Subject()
      this.subscription = intervalObs$.subscribe(subject$)

      this.subscription = subject$.subscribe({
        next: (num) => console.log('Observable 1 ' + num),
      });

      setTimeout(() => {
        this.subscription = subject$.subscribe({
          next: (num) => console.log('Observable 2 ' + num),
        });
      }, 2000)
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
