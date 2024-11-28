import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { fromEvent, interval, Observable, Subscription, takeUntil } from 'rxjs';

@Component({
  selector: 'app-take-until-operator',
  standalone: true,
  imports: [],
  templateUrl: './take-until-operator.component.html',
  styleUrl: './take-until-operator.component.scss',
})
export class TakeUntilOperatorComponent implements AfterViewInit, OnDestroy {
  subscription!: Subscription;
  intervalData: number[] = [];

  buttonEvent!: Observable<Event>;

  ngAfterViewInit(): void {
    if (typeof document !== 'undefined') {
      this.buttonEvent = fromEvent(
        document.getElementById('button-click')!,
        'click'
      );
    }
  }

  onStart() {
    this.subscription = interval(500)
      .pipe(takeUntil(this.buttonEvent))
      .subscribe({
        next: (data) => {
          this.intervalData.push(data);
        },
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
