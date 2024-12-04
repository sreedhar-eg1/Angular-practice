import { afterNextRender, Component, OnDestroy } from '@angular/core';
import { AsyncSubject, Subscription } from 'rxjs';

@Component({
  selector: 'app-async-subject',
  standalone: true,
  imports: [],
  templateUrl: './async-subject.component.html',
  styleUrl: './async-subject.component.scss',
})
export class AsyncSubjectComponent implements OnDestroy {
  subscription!: Subscription;

  constructor() {
    afterNextRender(() => {
      // async subject, when the observable is completed , it will send the last emitted value, otherwise it send nothing
      // If we get error then error will be sent to all the observer, otherwise on complete it will send the last emitted value

      let asyncSubject = new AsyncSubject()

      this.subscription = asyncSubject.subscribe({
        next: (data) => console.log('Observer 1 ' + data)
      })

      asyncSubject.next(1)
      asyncSubject.next(2)
      asyncSubject.next(3)

      this.subscription = asyncSubject.subscribe({
        next: (data) => console.log('Observer 2 ' + data)
      })

      asyncSubject.complete()
      // asyncSubject.error('error occured')
    })
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
