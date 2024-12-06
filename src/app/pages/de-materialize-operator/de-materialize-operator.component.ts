import { afterNextRender, Component } from '@angular/core';
import { dematerialize, ObservableNotification, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-de-materialize-operator',
  standalone: true,
  imports: [],
  templateUrl: './de-materialize-operator.component.html',
  styleUrl: './de-materialize-operator.component.scss',
})
export class DeMaterializeOperatorComponent {
  subscription!: Subscription;

  constructor() {
    afterNextRender(() => {
      let obsNotification1: ObservableNotification<number> = {
        kind: 'N',
        value: 1,
      };
      let obsNotification2: ObservableNotification<number> = {
        kind: 'N',
        value: 2,
      };
      let obsNotification3: ObservableNotification<number> = {
        kind: 'C',
      };

      of(obsNotification1, obsNotification2, obsNotification3)
        .pipe(dematerialize())
        .subscribe({
          next: (data) => console.log(data),
          error: (err) => console.log(err),
          complete: () => console.log('completed'),
        });
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
