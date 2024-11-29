import { afterNextRender, Component, OnDestroy } from '@angular/core';
import { map, mergeMap, of, Subscription } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-merge-map-operator',
  standalone: true,
  imports: [],
  templateUrl: './merge-map-operator.component.html',
  styleUrl: './merge-map-operator.component.scss',
})
export class MergeMapOperatorComponent implements OnDestroy {
  subscription!: Subscription;

  constructor() {
    // parameter: first value will be returning an observable, second will help us to format the response(deprecated), third tells to run number of request parallely at a time
    afterNextRender(() => {
      // with deprecated parameter
      // of(1, 2, 3, 4, 5)
      //   .pipe(
      //     mergeMap(
      //       (id) => ajax(`https://jsonplaceholder.typicode.com/posts/${id}`),
      //       (outerValue, innerValue, outerIndex, innerIndex) =>
      //         innerValue.response,
      //       2
      //     )
      //   )
      //   .subscribe({
      //     next: (data) => console.log(data),
      //   });

      // without deprecated parameter(with the help of pipe)
      this.subscription = of(1, 2, 3, 4, 5)
        .pipe(
          mergeMap(
            (id) =>
              ajax(`https://jsonplaceholder.typicode.com/posts/${id}`).pipe(
                map((data) => data.response)
              ),
            2
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
