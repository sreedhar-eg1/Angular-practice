import { afterNextRender, Component } from '@angular/core';
import { of, Subscription, switchMap, switchMapTo } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-switch-map-to-operator',
  standalone: true,
  imports: [],
  templateUrl: './switch-map-to-operator.component.html',
  styleUrl: './switch-map-to-operator.component.scss'
})
export class SwitchMapToOperatorComponent {
  subscription!: Subscription;

  constructor() {
    afterNextRender(() => {
      this.subscription = of(1, 2, 3, 4, 5)
        .pipe(switchMapTo(ajax(`https://jsonplaceholder.typicode.com/posts/1`)))
        .subscribe({
          next: (data) => console.log(data.response),
        });
    });
  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
