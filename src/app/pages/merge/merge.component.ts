import { afterNextRender, Component, OnDestroy } from '@angular/core';
import { Subscription, Observable, of, interval, take, merge } from 'rxjs';

@Component({
  selector: 'app-merge',
  standalone: true,
  imports: [],
  templateUrl: './merge.component.html',
  styleUrl: './merge.component.scss',
})
export class MergeComponent implements OnDestroy {
  subscription!: Subscription;

  constructor() {
    afterNextRender(() => {
      let source1$ = new Observable((observer) => {
        observer.next(1);
        observer.next(2);
        observer.complete();
        // observer.error('Error occured')
      });

      let source2$ = of('a', 'b', 'c');

      let source3$ = interval(1000).pipe(take(5));

      this.subscription = merge( source3$, source1$, source2$).subscribe({
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
