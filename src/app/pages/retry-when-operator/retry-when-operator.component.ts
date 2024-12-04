import { afterNextRender, Component } from '@angular/core';
import { error } from 'console';
import { Subscription, Observable, of, tap, delay, retryWhen } from 'rxjs';

@Component({
  selector: 'app-retry-when-operator',
  standalone: true,
  imports: [],
  templateUrl: './retry-when-operator.component.html',
  styleUrl: './retry-when-operator.component.scss',
})
export class RetryWhenOperatorComponent {
  subscription!: Subscription;

  constructor() {
    afterNextRender(() => {
      let userdata = {
        responseStatus: '500',
        users: [
          { id: 1, name: 'user 1' },
          { id: 2, name: 'user 2' },
          { id: 3, name: 'user 3' },
        ],
      };

      this.subscription = of(...userdata.users)
        .pipe(
          delay(1000),
          tap((user) => {
            if (!userdata.responseStatus.startsWith('2')) {
              throw new Error(userdata.responseStatus);
            }
          }),
          retryWhen((error) => {
            return error.pipe(
              tap((status) => {
                if (!status.startsWith('5')) {
                  throw new Error('error occured')
                }
              })
            )
          })
        )
        .subscribe({
          next: (data) => console.log(data),
          error: (err) => console.log(err),
        });

        setTimeout(() => {
          userdata.responseStatus = '200'
        }, 3000)
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
