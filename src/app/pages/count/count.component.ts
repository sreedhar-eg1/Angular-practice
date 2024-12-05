import { afterNextRender, Component } from '@angular/core';
import { count, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-count',
  standalone: true,
  imports: [],
  templateUrl: './count.component.html',
  styleUrl: './count.component.scss',
})
export class CountComponent {
  subscription!: Subscription;

  constructor() {
    afterNextRender(() => {
      // will give you the count
      // this.subscription = of(1,2,3,4,5,6,7,8).pipe(count()).subscribe({
      //   next: (data) => console.log(data)
      // })

      // we can give condition also
      this.subscription = of(1, 2, 3, 4, 5, 6, 7, 8)
        .pipe(count((num, ind) => num % 2 === 0))
        .subscribe({
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
