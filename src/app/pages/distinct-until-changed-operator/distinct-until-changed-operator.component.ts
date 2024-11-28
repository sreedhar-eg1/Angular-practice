import { afterNextRender, Component, OnDestroy } from '@angular/core';
import { Subscription, of, from, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-distinct-until-changed-operator',
  standalone: true,
  imports: [],
  templateUrl: './distinct-until-changed-operator.component.html',
  styleUrl: './distinct-until-changed-operator.component.scss',
})
export class DistinctUntilChangedOperatorComponent implements OnDestroy {
  subscription!: Subscription;

  employees = [
    { id: 1, name: 'name 1' },
    { id: 2, name: 'name 2' },
    { id: 3, name: 'name 2' },
    { id: 4, name: 'name 3' },
    { id: 5, name: 'name 5' },
  ];

  constructor() {
    afterNextRender(() => {
      // this.subscription = of(1, 2, 2, 4, 4)
      //   .pipe(distinctUntilChanged())
      //   .subscribe({
      //     next: (num) => console.log(num),
      //   });

      // this.subscription = of(1, 2, 2, 3, 4)
      //   .pipe(distinctUntilChanged((prev, cur) => cur === prev + 1))
      //   .subscribe({
      //     next: (num) => console.log(num),
      //   });

      // this.subscription = from(this.employees)
      //   .pipe(distinctUntilChanged((prev, cur) => cur.name === prev.name))
      //   .subscribe({
      //     next: (data) => console.log(data),
      //   });

      // Use of key selector
      this.subscription = from(this.employees)
        .pipe(
          distinctUntilChanged(
            (prev, cur) => cur === prev,
            (employee) => employee.name
          )
        )
        .subscribe({
          next: (data) => console.log(data),
        });
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe;
    }
  }
}
