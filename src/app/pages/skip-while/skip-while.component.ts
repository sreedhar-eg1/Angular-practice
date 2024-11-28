import { Component, OnDestroy, OnInit } from '@angular/core';
import { of, skipWhile, Subscription } from 'rxjs';

@Component({
  selector: 'app-skip-while',
  standalone: true,
  imports: [],
  templateUrl: './skip-while.component.html',
  styleUrl: './skip-while.component.scss'
})
export class SkipWhileComponent implements OnInit, OnDestroy {
  subscription!: Subscription

  ngOnInit(): void {
     this.subscription = of(1,2,3,4,5,6,7,8,9).pipe(skipWhile((num, ind) => num < 4)).subscribe({
      next: (num) => console.log(num)
     }) 
  }

  ngOnDestroy(): void {
      if(this.subscription) {
        this.subscription.unsubscribe()
      }
  }

}
