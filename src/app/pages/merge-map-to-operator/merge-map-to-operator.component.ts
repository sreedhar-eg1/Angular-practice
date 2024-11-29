import { afterNextRender, Component, OnDestroy } from '@angular/core';
import { Subscription, of, mergeMapTo } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-merge-map-to-operator',
  standalone: true,
  imports: [],
  templateUrl: './merge-map-to-operator.component.html',
  styleUrl: './merge-map-to-operator.component.scss',
})
export class MergeMapToOperatorComponent implements OnDestroy {
  subscription!: Subscription;

  constructor() {
    afterNextRender(() => {
      this.subscription = of(1, 2, 3, 4, 5)
        .pipe(mergeMapTo(ajax(`https://jsonplaceholder.typicode.com/posts/1`)))
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
