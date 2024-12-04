import { afterNextRender, Component, OnDestroy } from '@angular/core';
import { concat, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-concat-operator',
  standalone: true,
  imports: [],
  templateUrl: './concat-operator.component.html',
  styleUrl: './concat-operator.component.scss',
})
export class ConcatOperatorComponent implements OnDestroy {
  subscription!: Subscription;

  constructor() {
    afterNextRender(() => {
      // It emit the first observable and go to the next
      let source1$ = new Observable((observer) => {
        observer.next(1);
        observer.next(2);
        observer.complete()
      });

      let source2$ = new Observable((observer) => {
        observer.next(11);
        observer.next(12);
        observer.complete()
      });

      let source3$ = new Observable((observer) => {
        observer.next(21);
        observer.next(22);
        observer.complete()
      });

      this.subscription = concat(...[source1$, source2$, source3$]).subscribe({
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
