import { afterNextRender, Component, OnDestroy } from '@angular/core';
import { forkJoin, Observable, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-forkjoin',
  standalone: true,
  imports: [],
  templateUrl: './forkjoin.component.html',
  styleUrl: './forkjoin.component.scss',
})
export class ForkjoinComponent implements OnDestroy {
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

      this.subscription = forkJoin([source1$, source2$]).subscribe({
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
