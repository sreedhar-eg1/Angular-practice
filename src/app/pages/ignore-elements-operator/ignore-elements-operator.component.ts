import { Component, OnInit } from '@angular/core';
import { ignoreElements, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-ignore-elements-operator',
  standalone: true,
  imports: [],
  templateUrl: './ignore-elements-operator.component.html',
  styleUrl: './ignore-elements-operator.component.scss',
})
export class IgnoreElementsOperatorComponent implements OnInit {
  subscription!: Subscription;

  ngOnInit(): void {
    this.subscription = of(1, 2, 3, 4, 5, 6)
      .pipe(ignoreElements())
      .subscribe({
        next: (val) => console.log(val),
        error: (err) => console.log(err),
        complete: () => console.log('Completed'),
      });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
