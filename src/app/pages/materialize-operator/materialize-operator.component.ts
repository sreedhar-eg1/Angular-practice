import { afterNextRender, Component } from '@angular/core';
import { map, materialize, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-materialize-operator',
  standalone: true,
  imports: [],
  templateUrl: './materialize-operator.component.html',
  styleUrl: './materialize-operator.component.scss',
})
export class MaterializeOperatorComponent {
  subscription!: Subscription;

  constructor() {
    afterNextRender(() => {
      this.subscription = of(1, 2, 3, 4, 5)
        .pipe(
          map((data) => {
            if (data === 3) {
              throw new Error('Error occured')
            }
          }),
          materialize())
        .subscribe({
          next: (data) => console.log(data),
          error: (err) => console.log(err),
          complete: () => console.log('completed'),
        });
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
