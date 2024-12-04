import { afterNextRender, Component, OnDestroy } from '@angular/core';
import { of, Subscription, zip } from 'rxjs';

@Component({
  selector: 'app-zip',
  standalone: true,
  imports: [],
  templateUrl: './zip.component.html',
  styleUrl: './zip.component.scss',
})
export class ZipComponent implements OnDestroy {
  subscription!: Subscription;

  constructor() {
    afterNextRender(() => {
      let source1$ = of(1, 2, 3, 4, 5, 6);
      let source2$ = of('a', 'b', 'c');

      //without customizing
      // this.subscription = zip([source1$, source2$]).subscribe({
      //   next: (data) => console.log(data),
      // });

      //with customizing
      this.subscription = zip([source1$, source2$], (a, b) => a + ',' + b).subscribe({
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
