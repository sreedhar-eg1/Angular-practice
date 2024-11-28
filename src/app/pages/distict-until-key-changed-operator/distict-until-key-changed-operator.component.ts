import { afterNextRender, Component, OnDestroy } from '@angular/core';
import {
  Subscription,
  of,
  distinct,
  from,
  distinctUntilKeyChanged,
} from 'rxjs';

@Component({
  selector: 'app-distict-until-key-changed-operator',
  standalone: true,
  imports: [],
  templateUrl: './distict-until-key-changed-operator.component.html',
  styleUrl: './distict-until-key-changed-operator.component.scss',
})
export class DistictUntilKeyChangedOperatorComponent implements OnDestroy {
  subscription!: Subscription;

  employees = [
    { id: 1, name: 'name 1' },
    { id: 2, name: 'name 2' },
    { id: 3, name: 'name 3' },
    { id: 3, name: 'name 3' },
    { id: 4, name: 'name 2' },
    { id: 5, name: 'name 5' },
  ];

  constructor() {
    afterNextRender(() => {
      // this.subscription = from(this.employees)
      //   .pipe(distinctUntilKeyChanged('name'))
      //   .subscribe({
      //     next: (data) => console.log(data),
      //   });

      this.subscription = from(this.employees)
        .pipe(
          distinctUntilKeyChanged(
            'name',
            (prev, cur) => cur.substring(0, 4) === prev.substring(0, 4)
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
