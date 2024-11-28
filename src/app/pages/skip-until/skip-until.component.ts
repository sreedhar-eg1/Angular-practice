import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { fromEvent, interval, Observable, skipUntil, Subscription } from 'rxjs';

@Component({
  selector: 'app-skip-until',
  standalone: true,
  imports: [],
  templateUrl: './skip-until.component.html',
  styleUrl: './skip-until.component.scss',
})
export class SkipUntilComponent implements AfterViewInit, OnDestroy {
  subscription!: Subscription;
  intervalData: number[] = [];

  buttonEvent!: Observable<Event>;

  ngAfterViewInit(): void {
    if (typeof document !== 'undefined') {
      this.buttonEvent = fromEvent(
        document.getElementById('button-click')!,
        'click'
      );

      this.subscription = interval(500)
        .pipe(skipUntil(this.buttonEvent))
        .subscribe({
          next: (num) => console.log(num),
        });
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
