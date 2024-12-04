import { afterNextRender, Component, OnDestroy } from '@angular/core';
import { Observable, retry, Subscription } from 'rxjs';

@Component({
  selector: 'app-retry-operator',
  standalone: true,
  imports: [],
  templateUrl: './retry-operator.component.html',
  styleUrl: './retry-operator.component.scss',
})
export class RetryOperatorComponent implements OnDestroy {
  subscription!: Subscription;

  constructor() {
    afterNextRender(() => {
      let source$ = new Observable((observer) => {
        observer.next(1);
        observer.next(2);
        observer.error('Error occured');
      });

      this.subscription = source$.pipe(retry(2)).subscribe({
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
