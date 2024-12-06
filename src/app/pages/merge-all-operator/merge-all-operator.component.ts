import { afterNextRender, Component } from '@angular/core';
import { interval, map, mergeAll, Subscription, take } from 'rxjs';

@Component({
  selector: 'app-merge-all-operator',
  standalone: true,
  imports: [],
  templateUrl: './merge-all-operator.component.html',
  styleUrl: './merge-all-operator.component.scss',
})
export class MergeAllOperatorComponent {
  subscription!: Subscription;

  constructor() {
    afterNextRender(() => {
      this.subscription = interval(1000)
        .pipe(
          take(4),
          map((num) =>
            interval(500).pipe(
              map((n) => n * num),
              take(5)
            )
          ),
          mergeAll()
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
