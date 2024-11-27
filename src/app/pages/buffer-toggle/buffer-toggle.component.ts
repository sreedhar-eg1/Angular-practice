import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import {
  bufferToggle,
  fromEvent,
  interval,
  Observable,
  Subscription,
  take,
  tap,
} from 'rxjs';

@Component({
  selector: 'app-buffer-toggle',
  standalone: true,
  imports: [],
  templateUrl: './buffer-toggle.component.html',
  styleUrl: './buffer-toggle.component.scss',
})
export class BufferToggleComponent implements OnInit, OnDestroy, AfterViewInit {
  subscription!: Subscription;
  intervalData: number[] = [];

  open!: Observable<Event>;

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    if (typeof document !== 'undefined') {
      this.open = fromEvent(
        document.getElementById('showButton')!,
        'click'
      ).pipe(tap(() => console.log('Opened')));
    }
  }

  onStartInterval() {
    let close = () => interval(6000).pipe(tap(() => console.log('Closed')));

    this.subscription = interval(1000)
      .pipe(
        tap((data) => console.log(data)),
        bufferToggle(this.open, close),
        tap((data) => console.log(data)),
        take(3)
      )
      .subscribe((num) => {
        this.intervalData.push(...num);
      });
  }

  onStopInterval() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
