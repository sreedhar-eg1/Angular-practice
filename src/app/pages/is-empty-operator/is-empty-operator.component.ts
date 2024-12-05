import { afterNextRender, Component } from '@angular/core';
import { isEmpty, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-is-empty-operator',
  standalone: true,
  imports: [],
  templateUrl: './is-empty-operator.component.html',
  styleUrl: './is-empty-operator.component.scss'
})
export class IsEmptyOperatorComponent {
  subscription!: Subscription

  constructor() {
    afterNextRender(() => {
      this.subscription = of().pipe(isEmpty()).subscribe({
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
