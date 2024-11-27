import { afterNextRender, Component, OnInit } from '@angular/core';
import { filter, interval, map } from 'rxjs';

@Component({
  selector: 'app-operator-basics',
  standalone: true,
  imports: [],
  templateUrl: './operator-basics.component.html',
  styleUrl: './operator-basics.component.scss',
})
export class OperatorBasicsComponent implements OnInit {
  constructor() {
    afterNextRender(() => {
      const newObservable = interval(1000);

      // Without the use of pipeable operator
      newObservable.subscribe({
        next: (data) => {
          if (data % 2 === 0) {
            console.log(data);
          }
        },
      });

      // With the use of pipeable operator
      newObservable
        .pipe(
          filter((num) => num % 2 === 0),
          map((num) => `Even number ${num}`)
        )
        .subscribe((data) => console.log(data));
    });
  }

  ngOnInit(): void {}
}
