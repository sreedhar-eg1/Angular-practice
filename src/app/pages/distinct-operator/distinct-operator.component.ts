import { afterNextRender, Component, OnDestroy } from '@angular/core';
import { distinct, from, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-distinct-operator',
  standalone: true,
  imports: [],
  templateUrl: './distinct-operator.component.html',
  styleUrl: './distinct-operator.component.scss',
})
export class DistinctOperatorComponent implements OnDestroy {
  subscription!: Subscription;

  employees = [
    { id: 1, name: 'name 1' },
    { id: 2, name: 'name 2' },
    { id: 3, name: 'name 3' },
    { id: 4, name: 'name 2' },
    { id: 5, name: 'name 5' },
  ];

  constructor() {
    afterNextRender(() => {
      this.subscription = of(1, 2, 3, 4, 5, 2, 1, 7, 4)
        .pipe(distinct())
        .subscribe({
          next: (num) => console.log(num),
        });
    });

    this.subscription = from(this.employees)
      .pipe(distinct((employee) => employee.name))
      .subscribe({
        next: (data) => console.log(data),
      });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
