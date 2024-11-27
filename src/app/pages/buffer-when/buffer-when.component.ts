import { afterNextRender, Component, OnDestroy, OnInit } from '@angular/core';
import { bufferWhen, interval, Subscription, tap } from 'rxjs';

@Component({
  selector: 'app-buffer-when',
  standalone: true,
  imports: [],
  templateUrl: './buffer-when.component.html',
  styleUrl: './buffer-when.component.scss',
})
export class BufferWhenComponent implements OnInit, OnDestroy {
  subscription!: Subscription;
  intervalData: number[] = [];

  constructor() {
    afterNextRender(() => {
      this.subscription = interval(500)
        .pipe(
          bufferWhen(() => interval(2000)),
          tap((data) => console.log(data))
        )
        .subscribe({
          next: (num) => this.intervalData.push(...num),
        });
    });
  }

  ngOnInit(): void {}

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
