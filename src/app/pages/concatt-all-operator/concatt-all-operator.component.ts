import { afterNextRender, Component } from '@angular/core';
import { concatAll, map, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-concatt-all-operator',
  standalone: true,
  imports: [],
  templateUrl: './concatt-all-operator.component.html',
  styleUrl: './concatt-all-operator.component.scss',
})
export class ConcattAllOperatorComponent {
  subscription!: Subscription;

  constructor() {
    afterNextRender(() => {
      this.subscription = of('a', 'b')
        .pipe(
          map((val) => of(10, 20, 30)),
          concatAll()
        )
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
