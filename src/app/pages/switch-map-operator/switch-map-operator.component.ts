import { afterNextRender, Component } from '@angular/core';
import { of, Subscription, switchMap } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-switch-map-operator',
  standalone: true,
  imports: [],
  templateUrl: './switch-map-operator.component.html',
  styleUrl: './switch-map-operator.component.scss'
})
export class SwitchMapOperatorComponent {
  subscription!: Subscription;

  constructor() {
    afterNextRender(() => {
      this.subscription = of(1, 2, 3, 4, 5)
        .pipe(switchMap((id) => ajax(`https://jsonplaceholder.typicode.com/posts/${id}`)))
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
