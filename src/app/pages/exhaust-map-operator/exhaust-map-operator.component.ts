import { afterNextRender, Component, OnDestroy } from '@angular/core';
import { exhaustMap, interval, skip, Subscription, take } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-exhaust-map-operator',
  standalone: true,
  imports: [],
  templateUrl: './exhaust-map-operator.component.html',
  styleUrl: './exhaust-map-operator.component.scss',
})
export class ExhaustMapOperatorComponent implements OnDestroy {
  subscription!: Subscription;

  constructor() {
    afterNextRender(() => {
      this.subscription = interval(100)
        .pipe(
          skip(1),
          exhaustMap((id) =>
            ajax(`https://jsonplaceholder.typicode.com/posts/${id}`)
          ),
          take(5)
        )
        .subscribe({
          next: (data) => console.log(data.response),
        });
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
