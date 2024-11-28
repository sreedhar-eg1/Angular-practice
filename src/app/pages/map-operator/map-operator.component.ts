import {
  afterNextRender,
  AfterViewInit,
  Component,
  OnDestroy,
} from '@angular/core';
import { fromEvent, map, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-map-operator',
  standalone: true,
  imports: [],
  templateUrl: './map-operator.component.html',
  styleUrl: './map-operator.component.scss',
})
export class MapOperatorComponent implements AfterViewInit, OnDestroy {
  subscription!: Subscription;

  constructor() {
    afterNextRender(() => {
      // this.subscription = of(1, 2, 3, 4)
      //   .pipe(map((val) => val * 10))
      //   .subscribe({
      //     next: (num) => console.log(num),
      //   });
    });
  }

  ngAfterViewInit(): void {
    if (typeof document !== 'undefined') {
      fromEvent(document.getElementById('button-click')!, 'click')
        .pipe(
          map((event: Event) => ({
            clientX: (event as PointerEvent).clientX,
            clientY: (event as PointerEvent).clientY,
          }))
        )
        .subscribe({
          next: (event) => console.log(event),
        });
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
