import { AsyncPipe } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { interval, Observable, take, tap } from 'rxjs';

@Component({
  selector: 'app-child-default',
  imports: [AsyncPipe],
  templateUrl: './child-default.component.html',
  styleUrl: './child-default.component.scss'
})
export class ChildDefaultComponent implements OnInit {
  count = signal(0)
  number$!: Observable<number>

  ngOnInit(): void {
    this.number$ = interval(1000).pipe(take(5), tap((num) => this.count.set(num)))
  }
}
