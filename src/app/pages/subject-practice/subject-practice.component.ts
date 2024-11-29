import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-subject-practice',
  standalone: true,
  imports: [],
  templateUrl: './subject-practice.component.html',
  styleUrl: './subject-practice.component.scss'
})
export class SubjectPracticeComponent {

  myObservable$ = new Observable(observer => {
    observer.next(1)
    observer.next(2)
    observer.next(3)
    observer.next(4)
    observer.complete()
  })

  constructor() {
    this.observable()
    this.subjectAsObservable()
  }

  observable() {
    // For every observer this observable execute hence two times we the value below
    this.myObservable$.subscribe({
      next: (data) => console.log('observable 1 ' + data),
      error: (err) => console.log(err),
      complete: () => console.log('completed')
    })

    this.myObservable$.subscribe({
      next: (data) => console.log('observable 2 ' + data),
      error: (err) => console.log(err),
      complete: () => console.log('completed')
    })
  }

  subjectAsObservable() {
    let subject = new Subject()
    subject.subscribe({
      next: (data) => console.log('subject 1 ' + data),
      error: (err) => console.log(err),
      complete: () => console.log('completed')
    })

    subject.subscribe({
      next: (data) => console.log('subject 2 ' + data),
      error: (err) => console.log(err),
      complete: () => console.log('completed')
    })

    // this.myObservable$.subscribe(subject)

    subject.next(1)
    subject.next(2)
  }

}
