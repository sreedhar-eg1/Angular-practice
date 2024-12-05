import { afterNextRender, Component } from '@angular/core';
import { asyncScheduler, map, observeOn, of, subscribeOn, Subscription } from 'rxjs';

@Component({
  selector: 'app-observe-on-operator',
  standalone: true,
  imports: [],
  templateUrl: './observe-on-operator.component.html',
  styleUrl: './observe-on-operator.component.scss',
})
export class ObserveOnOperatorComponent {
  subscription!: Subscription;

  constructor() {
    afterNextRender(() => {
      // subscribe on - entire observable subscribion will be kept in async schedular
      //observe on - the place where we used observe on from there the effect take place
      console.log('Start');

      // this.subscription = of(1, 2, 3)
      //   .pipe(
      //     map((data) => {
      //       console.log('Mapping data');
      //       return data * 10;
      //     }),
      //     subscribeOn(asyncScheduler)
      //   )
      //   .subscribe({
      //     next: (data) => console.log(data),
      //   });

      this.subscription = of(1, 2, 3)
        .pipe(
          map((data) => {
            console.log('Mapping data');
            return data * 10;
          }),
          observeOn(asyncScheduler)
        )
        .subscribe({
          next: (data) => console.log(data),
        });

      console.log('end');
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
