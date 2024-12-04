import { afterNextRender, Component, OnDestroy } from '@angular/core';
import { combineLatest, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-combine-latest-operator',
  standalone: true,
  imports: [],
  templateUrl: './combine-latest-operator.component.html',
  styleUrl: './combine-latest-operator.component.scss',
})
export class CombineLatestOperatorComponent implements OnDestroy {
  subscription!: Subscription;

  constructor() {
    afterNextRender(() => {
      // It combines the latest emitted value from each observer and send it as array
      let source1$ = new Observable((observer) => {
        setTimeout(() => {
          observer.next(1);
        }, 1000);
      });

      let source2$ = new Observable((observer) => {
        setTimeout(() => {
          observer.next(5);
        }, 5000);
      });

      this.subscription = combineLatest([source1$, source2$]).subscribe({
        next: (data) => console.log(data),
      });
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
