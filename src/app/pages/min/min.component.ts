import { afterNextRender, Component } from '@angular/core';
import { Subscription, of, max, from, min } from 'rxjs';

@Component({
  selector: 'app-min',
  standalone: true,
  imports: [],
  templateUrl: './min.component.html',
  styleUrl: './min.component.scss'
})
export class MinComponent {
  subscription!: Subscription;

  constructor() {
    afterNextRender(() => {
      this.subscription = of(1, 100, -1, 49, 3)
        .pipe(min())
        .subscribe({
          next: (data) => console.log(data),
        });

      let person = [
        { name: 'name 1', age: 20 },
        { name: 'name 2', age: 10 },
        { name: 'name 3', age: 60 },
        { name: 'name 4', age: 40 },
      ];

      this.subscription = from(person).pipe(min((prev, cur) => prev.age > cur.age ? 1 : -1)).subscribe({
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
