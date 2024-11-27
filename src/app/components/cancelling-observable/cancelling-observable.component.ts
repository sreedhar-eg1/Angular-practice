import { afterNextRender, AfterViewInit, Component, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-cancelling-observable',
  standalone: true,
  imports: [],
  templateUrl: './cancelling-observable.component.html',
  styleUrl: './cancelling-observable.component.scss',
})
export class CancellingObservableComponent implements OnInit {
  subscription!: Subscription;

  constructor() {
    afterNextRender(() => {
      //Using rxjs observable
    // const timerObservable = interval(1000);

    // this.subscription = timerObservable.subscribe({
    //   next: (data) => {
    //     console.log(`${new Date().toLocaleTimeString()} ${data}`);
    //   },
    // });

    //Custom interval
    const timerObservable = new Observable((observer) => {
      let i = 0

      let timer =  setInterval(() => {
        console.log('Interval Running')
        observer.next(i++)
      }, 1000)

      //This return is executed when we unsubscribe and some error occurs
      return () => {
        clearInterval(timer)
      }
    })

    this.subscription = timerObservable.subscribe({
      next: (data) => {
        console.log(data)
      }
    })
    })
  }

  ngOnInit(): void {
  }

  cancelTimer() {
    this.subscription.unsubscribe();
  }
}
