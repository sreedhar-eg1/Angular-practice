import { afterNextRender, Component, OnDestroy } from '@angular/core';
import { error } from 'console';
import { defer, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-defer',
  standalone: true,
  imports: [],
  templateUrl: './defer.component.html',
  styleUrl: './defer.component.scss'
})
export class DeferComponent implements OnDestroy {
  subscription!: Subscription

  constructor() {
    afterNextRender(() => {
      let source$ = defer(() => {
        if (Math.random() > 0.5) {
          return of(1,2,3,4,5)
        } else {
          return of('a','b','c')
        }
      })

      this.subscription = source$.subscribe({
        next: (data) => console.log(data),
        error: (error) => console.log(error)
      })
    })
  }

  ngOnDestroy(): void {
      if (this.subscription) {
        this.subscription.unsubscribe()
      }
  }
}
