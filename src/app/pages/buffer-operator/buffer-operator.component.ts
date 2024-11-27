import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { buffer, fromEvent, interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-buffer-operator',
  standalone: true,
  imports: [],
  templateUrl: './buffer-operator.component.html',
  styleUrl: './buffer-operator.component.scss',
})
export class BufferOperatorComponent implements AfterViewInit, OnDestroy {
  intervalData: number[] = [];
  subscription!: Subscription;

  showData$!: Observable<Event>;

  ngAfterViewInit(): void {
    if (typeof document !== 'undefined') {
      this.showData$ = fromEvent(
        document.getElementById('showButton')!,
        'click'
      );
    }
  }

  onStartInterval() {
    this.subscription = interval(1000)
      .pipe(buffer(this.showData$))
      .subscribe({
        next: (data) => {
          this.intervalData.push(...data);
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
