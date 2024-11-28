import { afterNextRender, Component, OnDestroy } from '@angular/core';
import { Subscription, audit, interval } from 'rxjs';

@Component({
  selector: 'app-audit-operator',
  standalone: true,
  imports: [],
  templateUrl: './audit-operator.component.html',
  styleUrl: './audit-operator.component.scss',
})
export class AuditOperatorComponent implements OnDestroy {
  subscription!: Subscription;

  constructor() {
    afterNextRender(() => {
      this.subscription = interval(500)
        .pipe(audit((num) => interval(2000)))
        .subscribe({
          next: (num) => console.log(num),
        });
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
