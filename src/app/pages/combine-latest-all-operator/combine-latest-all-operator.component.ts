import { afterNextRender, Component } from '@angular/core';
import { combineLatestAll, interval, map, of, Subscription, take } from 'rxjs';

@Component({
  selector: 'app-combine-latest-all-operator',
  standalone: true,
  imports: [],
  templateUrl: './combine-latest-all-operator.component.html',
  styleUrl: './combine-latest-all-operator.component.scss',
})
export class CombineLatestAllOperatorComponent {
  subscription!: Subscription;

  constructor() {
    afterNextRender(() => {
      this.subscription = of('a', 'b')
        .pipe(
          map((data) => interval(1000).pipe(take(3))),
          combineLatestAll()
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
