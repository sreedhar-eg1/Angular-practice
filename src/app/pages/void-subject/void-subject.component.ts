import { afterNextRender, Component, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-void-subject',
  standalone: true,
  imports: [],
  templateUrl: './void-subject.component.html',
  styleUrl: './void-subject.component.scss',
})
export class VoidSubjectComponent implements OnDestroy {
  subscription!: Subscription;

  constructor() {
    afterNextRender(() => {
      // If we want to know if emitting is done, where data emitted wont matter, then we can use void subject, givind void type to subject
      // To make observer notified

      let voidSubject = new Subject<void>();

      this.subscription = voidSubject.subscribe({
        next: (data) => console.log('Observer 1 ' + data),
      });

      voidSubject.next();
      voidSubject.next();
      voidSubject.next();

      this.subscription = voidSubject.subscribe({
        next: (data) => console.log('Observer 2 ' + data),
      });
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
