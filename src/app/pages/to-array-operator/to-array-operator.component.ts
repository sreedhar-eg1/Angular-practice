import { afterNextRender, Component } from '@angular/core';
import { of, Subscription, toArray } from 'rxjs';

@Component({
  selector: 'app-to-array-operator',
  standalone: true,
  imports: [],
  templateUrl: './to-array-operator.component.html',
  styleUrl: './to-array-operator.component.scss'
})
export class ToArrayOperatorComponent {
  subscription!: Subscription

  constructor() {
    afterNextRender(() => {
      this.subscription = of(1,2,3,4,5).pipe(toArray()).subscribe({
        next: (data) => console.log(data)
      })
    })
  }

  ngOnDestroy(): void {
      if (this.subscription) {
        this.subscription.unsubscribe()
      }
  }
}
