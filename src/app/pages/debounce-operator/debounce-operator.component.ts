import { afterNextRender, Component, OnDestroy } from '@angular/core';
import { debounce, fromEvent, interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-debounce-operator',
  standalone: true,
  imports: [],
  templateUrl: './debounce-operator.component.html',
  styleUrl: './debounce-operator.component.scss',
})
export class DebounceOperatorComponent implements OnDestroy {
  subscription!: Subscription;

  constructor() {
    afterNextRender(() => {
      this.subscription = interval(1000)
        .pipe(debounce((val) => interval(100 * val)))
        .subscribe({
          next: (val) => console.log(val),
          complete: () => console.log('Completed'),
        });

      this.subscription = fromEvent(
        document.getElementById('btn-click')!,
        'click'
      )
        .pipe(debounce((event) => interval(1000)))
        .subscribe({
          next: (event) => console.log(event),
        });
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
