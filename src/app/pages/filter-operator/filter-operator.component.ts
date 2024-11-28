import { afterNextRender, Component, OnDestroy } from '@angular/core';
import { filter, fromEvent, Observable, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-filter-operator',
  standalone: true,
  imports: [],
  templateUrl: './filter-operator.component.html',
  styleUrl: './filter-operator.component.scss',
})
export class FilterOperatorComponent implements OnDestroy {
  subscription!: Subscription;
  documentEvent!: Observable<Event>;

  constructor() {
    afterNextRender(() => {
      this.subscription = of(1, 2, 3, 4, 5, 6, 7)
        .pipe(filter((num) => num % 2 === 0))
        .subscribe({
          next: (num) => console.log(num),
        });

      this.subscription = fromEvent(document, 'click').pipe(
        filter((event: Event) => {
            return (event.target as HTMLElement).tagName === 'A'

        })
      ).subscribe((event) => {
        console.log(event);
      });
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
