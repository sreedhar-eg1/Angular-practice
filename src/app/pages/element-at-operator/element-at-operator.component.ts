import { Component, OnDestroy, OnInit } from '@angular/core';
import { elementAt, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-element-at-operator',
  standalone: true,
  imports: [],
  templateUrl: './element-at-operator.component.html',
  styleUrl: './element-at-operator.component.scss',
})
export class ElementAtOperatorComponent implements OnInit, OnDestroy {
  subscription!: Subscription;

  ngOnInit(): void {
    this.subscription = of(1, 2, 3, 4, 5, 6)
      .pipe(elementAt(2))
      .subscribe({
        next: (val) => console.log(val),
        complete: () => console.log('Completed'),
      });

      this.subscription = of(1, 2, 3, 4, 5, 6)
      .pipe(elementAt(10, 'No value'))
      .subscribe({
        next: (val) => console.log(val),
        complete: () => console.log('Completed'),
      });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
