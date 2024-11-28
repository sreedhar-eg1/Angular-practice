import { afterNextRender, Component, OnDestroy } from '@angular/core';
import { interval, sample, Subscription } from 'rxjs';

@Component({
  selector: 'app-sample-operator',
  standalone: true,
  imports: [],
  templateUrl: './sample-operator.component.html',
  styleUrl: './sample-operator.component.scss',
})
export class SampleOperatorComponent implements OnDestroy {
  subscription!: Subscription;

  constructor() {
    afterNextRender(() => {
      this.subscription = interval(500)
        .pipe(sample(interval(2000)))
        .subscribe({
          next: (num) => console.log(num),
        });
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
