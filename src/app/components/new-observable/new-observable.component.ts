import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ObservableType } from '../../services/observable-type';

@Component({
  selector: 'app-new-observable',
  standalone: true,
  imports: [],
  templateUrl: './new-observable.component.html',
  styleUrl: './new-observable.component.scss',
})
export class NewObservableComponent implements OnInit {
  ngOnInit(): void {
    const observer = new Observable<number>((observer) => {
      for (let index = 0; index < 5; index++) {
        // if (index === 3) {
        //   observer.error('Unknown error');
        // }
        observer.next(index);
      }
      observer.complete();
    });

    observer.subscribe({
      next: (data) => console.log(data),
      error: (err) => console.log(err),
      complete: () => console.log('Custom observable completed'),
    });

    observer.subscribe(new ObservableType())
  }
}
