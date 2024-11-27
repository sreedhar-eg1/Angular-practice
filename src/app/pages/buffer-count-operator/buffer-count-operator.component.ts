import { Component, OnDestroy, OnInit } from '@angular/core';
import { bufferCount, interval, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-buffer-count-operator',
  standalone: true,
  imports: [],
  templateUrl: './buffer-count-operator.component.html',
  styleUrl: './buffer-count-operator.component.scss',
})
export class BufferCountOperatorComponent implements OnInit, OnDestroy {
  subscription!: Subscription;
  intervalData: number[] = [];

  ngOnInit(): void {
    // of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
    //   .pipe(bufferCount(3))
    //   .subscribe({
    //     next: (num) => this.intervalData.push(...num),
    //   });
  }

  onBuffer() {
    this.intervalData = [];

    this.subscription = interval(1000)
      .pipe(bufferCount(3))
      .subscribe({
        next: (num) => this.intervalData.push(...num),
      });
  }

  onBufferWithSize() {
    this.intervalData = [];

    this.subscription = interval(1000)
      .pipe(bufferCount(3, 1))
      .subscribe({
        next: (num) => this.intervalData.push(...num),
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
