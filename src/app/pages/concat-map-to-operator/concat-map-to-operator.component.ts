import { afterNextRender, Component } from '@angular/core';
import { concatMapTo, of, Subscription } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-concat-map-to-operator',
  standalone: true,
  imports: [],
  templateUrl: './concat-map-to-operator.component.html',
  styleUrl: './concat-map-to-operator.component.scss'
})
export class ConcatMapToOperatorComponent {
  subscription!: Subscription;

  constructor() {
    afterNextRender(() => {
      this.subscription = of(1, 2, 3, 4, 5)
        .pipe(concatMapTo(ajax(`https://jsonplaceholder.typicode.com/posts/1`)))
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
