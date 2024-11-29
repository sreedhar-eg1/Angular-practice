import { Component, OnDestroy, OnInit } from '@angular/core';
import { mapTo, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-map-to-operator',
  standalone: true,
  imports: [],
  templateUrl: './map-to-operator.component.html',
  styleUrl: './map-to-operator.component.scss',
})
export class MapToOperatorComponent implements OnInit, OnDestroy {
  subscription!: Subscription;

  ngOnInit(): void {
    this.subscription = of(1, 2, 3, 4, 5)
      .pipe(mapTo(10))
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
