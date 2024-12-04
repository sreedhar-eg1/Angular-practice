import { afterNextRender, Component, OnDestroy } from '@angular/core';
import { catchError, Observable, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-catch-error-operator',
  standalone: true,
  imports: [],
  templateUrl: './catch-error-operator.component.html',
  styleUrl: './catch-error-operator.component.scss',
})
export class CatchErrorOperatorComponent implements OnDestroy {
  subscription!: Subscription;

  constructor() {
    afterNextRender(() => {
      let myObservable$ = new Observable((observer) => {
        observer.next('a');
        observer.next('b');
        observer.error('Error ocurred');
      });

      myObservable$.pipe(catchError((err, caught) => {
        // return of(1,2,3,4)
        throw new Error('Something went wrong')
      })).subscribe({
        next: (data) => console.log(data),
        error: (err) => console.log(err),
        complete: () => console.log('Completed')
      });
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
