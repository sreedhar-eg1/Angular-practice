import { afterNextRender, Component } from '@angular/core';
import { from, max, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-max',
  standalone: true,
  imports: [],
  templateUrl: './max.component.html',
  styleUrl: './max.component.scss',
})
export class MaxComponent {
  subscription!: Subscription;

  constructor() {
    afterNextRender(() => {
      this.subscription = of(1, 100, -1, 49, 3)
        .pipe(max())
        .subscribe({
          next: (data) => console.log(data),
        });

      let person = [
        { name: 'name 1', age: 20 },
        { name: 'name 2', age: 10 },
        { name: 'name 3', age: 60 },
        { name: 'name 4', age: 40 },
      ];

      this.subscription = from(person).pipe(max((prev, cur) => prev.age > cur.age ? 1 : -1)).subscribe({
        next: (data) => console.log(data),
      });
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
