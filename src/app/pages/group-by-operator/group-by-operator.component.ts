import { afterNextRender, Component } from '@angular/core';
import { concatMap, groupBy, mergeMap, of, Subscription, toArray } from 'rxjs';

@Component({
  selector: 'app-group-by-operator',
  standalone: true,
  imports: [],
  templateUrl: './group-by-operator.component.html',
  styleUrl: './group-by-operator.component.scss',
})
export class GroupByOperatorComponent {
  subscription!: Subscription;

  constructor() {
    afterNextRender(() => {
      this.subscription = of(1, 2, 3, 4, 5, 6, 7)
        .pipe(
          groupBy((val) => val % 2 === 0),
          mergeMap((val) => val.pipe(toArray()))
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
