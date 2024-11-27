import { AfterViewInit, Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { from, fromEvent } from 'rxjs';
import { NewObservableComponent } from './components/new-observable/new-observable.component';
import { FunctionObservableComponent } from './components/function-observable/function-observable.component';
import { funcObservable, functionObs } from './services/function-type';
import { CancellingObservableComponent } from './components/cancelling-observable/cancelling-observable.component';
import { OperatorBasicsComponent } from './components/operator-basics/operator-basics.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    NewObservableComponent,
    FunctionObservableComponent,
    CancellingObservableComponent,
    OperatorBasicsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  title = 'rxjs-intro';

  posts = [
    { title: 'title 1', decription: 'description 1' },
    { title: 'title 2', decription: 'description 2' },
    { title: 'title 3', decription: 'description 3' },
  ];

  promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Resloved promise');
    }, 2000);
  });

  postsObservable$ = from(this.posts);
  promiseObservable$ = from(this.promise);

  constructor() {
    // this.postsObservable$.subscribe({
    //   next: (data) => console.log(data),
    //   error: (err) => console.log(err),
    //   complete: () => console.log('Completed post'),
    // });
    // this.promiseObservable$.subscribe({
    //   next: (data) => console.log(data),
    //   error: (err) => console.log(err),
    //   complete: () => console.log('Completed promise'),
    // });
    // console.log('Before functionObs using function')
    // console.log(functionObs())
    // console.log(functionObs())
    // console.log('After functionObs using function')
    // console.log('Before functionObs using function Observable')
    // console.log(funcObservable.subscribe((data) => {
    //   console.log(data)
    // }))
    // console.log(funcObservable.subscribe((data) => {
    //   console.log(data)
    // }))
    // console.log('After functionObs using function Observable')
  }

  ngAfterViewInit(): void {
    // if (typeof document !== 'undefined') {
    //   fromEvent(document.getElementById('click-button')!, 'click').subscribe({
    //     next: (data) => console.log(data),
    //     error: (err) => console.log(err),
    //     complete: () => console.log('DOM Event'),
    //   });
    // }
  }
}
