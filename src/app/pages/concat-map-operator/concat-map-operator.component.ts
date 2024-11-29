import { afterNextRender, Component, OnDestroy } from '@angular/core';
import { Subscription, concatMap, map, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-concat-map-operator',
  standalone: true,
  imports: [],
  templateUrl: './concat-map-operator.component.html',
  styleUrl: './concat-map-operator.component.scss',
})
export class ConcatMapOperatorComponent implements OnDestroy {
  subscription!: Subscription;

  constructor() {
    afterNextRender(() => {
      this.subscription = of(1, 2, 3, 4, 5)
        .pipe(
          concatMap((id) =>
            ajax(`https://jsonplaceholder.typicode.com/posts/${id}`).pipe(
              map((data) => data.response)
            )
          )
        )
        .subscribe({
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
