import { afterNextRender, Component } from '@angular/core';
import { asyncScheduler, of, subscribeOn, Subscription } from 'rxjs';

@Component({
  selector: 'app-subscribe-on-operator',
  standalone: true,
  imports: [],
  templateUrl: './subscribe-on-operator.component.html',
  styleUrl: './subscribe-on-operator.component.scss',
})
export class SubscribeOnOperatorComponent {
  subscription!: Subscription;

  constructor() {
    afterNextRender(() => {
      console.log('Start');
      
      this.subscription = of(1, 2, 3).pipe(subscribeOn(asyncScheduler)).subscribe({
        next: (data) => console.log(data),
      });

      console.log('end');
      
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
