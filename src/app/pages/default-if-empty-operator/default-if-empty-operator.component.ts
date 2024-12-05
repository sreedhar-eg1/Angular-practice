import { afterNextRender, Component } from '@angular/core';
import { defaultIfEmpty, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-default-if-empty-operator',
  standalone: true,
  imports: [],
  templateUrl: './default-if-empty-operator.component.html',
  styleUrl: './default-if-empty-operator.component.scss'
})
export class DefaultIfEmptyOperatorComponent {
  subscription!: Subscription

  constructor() {
    afterNextRender(() => {
      this.subscription = of(20).pipe(defaultIfEmpty(10)).subscribe({
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
