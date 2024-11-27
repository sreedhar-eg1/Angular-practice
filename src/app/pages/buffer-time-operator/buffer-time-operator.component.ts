import { Component, OnDestroy } from '@angular/core';
import { bufferTime, interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-buffer-time-operator',
  standalone: true,
  imports: [],
  templateUrl: './buffer-time-operator.component.html',
  styleUrl: './buffer-time-operator.component.scss',
})
export class BufferTimeOperatorComponent implements OnDestroy {
  subscription!: Subscription;
  intervalData: number[] = [];

  onBufferWithTime() {
    this.subscription = interval(1000)
      .pipe(bufferTime(2000))
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
