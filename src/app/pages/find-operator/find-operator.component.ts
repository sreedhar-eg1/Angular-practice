import { afterNextRender, Component } from '@angular/core';
import { find, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-find-operator',
  standalone: true,
  imports: [],
  templateUrl: './find-operator.component.html',
  styleUrl: './find-operator.component.scss'
})
export class FindOperatorComponent {
  subscription!: Subscription;

  constructor() {
    afterNextRender(() => {
      this.subscription = of(1, 2, 3, 4, 5, 6)
        .pipe(find((val) => val % 5 == 0))
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
