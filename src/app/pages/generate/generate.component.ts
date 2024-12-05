import { afterNextRender, Component, OnDestroy } from '@angular/core';
import { generate, Subscription } from 'rxjs';
import { GenerateOptions } from 'rxjs/internal/observable/generate';

@Component({
  selector: 'app-generate',
  standalone: true,
  imports: [],
  templateUrl: './generate.component.html',
  styleUrl: './generate.component.scss'
})
export class GenerateComponent implements OnDestroy {
  subscription!: Subscription

  constructor() {
    afterNextRender(() => {
      // old method (deprecated)
      // let source$ = generate(0, (x) => x < 5, (x) => x+1)
      // this.subscription = source$.subscribe({
      //   next: (data) => console.log(data)
      // })

      // new method
      let options: GenerateOptions<number, number> = {
        initialState: 0,
        condition: (x) => x < 5,
        iterate: (x) => x + 1,
        resultSelector: x => x
      }

      let source$ = generate(options)

      this.subscription = source$.subscribe({
        next: (data) => console.log(data)
      })
    })
  }

  ngOnDestroy(): void {
      if (this.subscription) {
        this.subscription.unsubscribe()
      }
  }
}
