import { afterNextRender, Component, OnDestroy } from '@angular/core';
import { of, partition, Subscription } from 'rxjs';

@Component({
  selector: 'app-partition',
  standalone: true,
  imports: [],
  templateUrl: './partition.component.html',
  styleUrl: './partition.component.scss'
})
export class PartitionComponent implements OnDestroy {
  subscription!: Subscription

  constructor() {
    afterNextRender(() => {
      let source1$ = of(1,2,3,4,5,6,7,8)

      const [evens$, odds$] = partition(source1$, (val, ind) => val % 2 === 0)

      this.subscription = evens$.subscribe({
        next: (num) => console.log(num)
      })

      this.subscription = odds$.subscribe({
        next: (num) => console.log(num)
      })
    })
  }

  ngOnDestroy(): void {
      if (this.subscription) {
        this.subscription.unsubscribe
      }
  }
}
