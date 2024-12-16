import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, signal } from '@angular/core';
import { Observable, interval, take, tap } from 'rxjs';

@Component({
  selector: 'app-child-push',
  imports: [AsyncPipe],
  templateUrl: './child-push.component.html',
  styleUrl: './child-push.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildPushComponent {
  count = signal(0);
  number$!: Observable<number>;

  private changeDetectorRef = inject(ChangeDetectorRef) 

  ngOnInit(): void {
    this.number$ = interval(1000).pipe(
      take(5),
      tap((num) => this.count.set(num))
    );

    // To manulally run change detection(can use either of them)
    this.changeDetectorRef.detectChanges()
    // this.changeDetectorRef.markForCheck()
  }
}
