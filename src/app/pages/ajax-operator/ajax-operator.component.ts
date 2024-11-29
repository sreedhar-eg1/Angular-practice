import { afterNextRender, Component, OnDestroy, OnInit } from '@angular/core';
import { title } from 'process';
import { Subscription } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-ajax-operator',
  standalone: true,
  imports: [],
  templateUrl: './ajax-operator.component.html',
  styleUrl: './ajax-operator.component.scss'
})
export class AjaxOperatorComponent implements OnInit, OnDestroy {
  subscription!: Subscription;

  constructor() {
    afterNextRender(() => {
      this.subscription = ajax('https://jsonplaceholder.typicode.com/posts').subscribe({
        next: (data) => console.log(data)
      })

      this.subscription = ajax.getJSON('https://jsonplaceholder.typicode.com/posts').subscribe({
        next: (data) => console.log(data)
      })

      this.subscription = ajax({
        url: 'https://jsonplaceholder.typicode.com/posts',
        method: 'POST',
        body: {
          title: 'sreedhar'
        },
        headers: {
          name: 'sreedhar'
        }
      }).subscribe({
        next: (data) => console.log(data)
      })
    })
  }

  ngOnInit(): void {
     
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
