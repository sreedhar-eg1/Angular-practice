import { Injectable } from '@angular/core';
import { ICourse } from '../models/course.model';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  courses: ICourse[] = [
    {
      name: 'Angular NgModule',
      description: 'Learn Angular NgModule',
      status: 'inActive',
    },
    {
      name: 'Angular 19 Standalone',
      description: 'Learn Angular 19 Standalone',
      status: 'inActive',
    },
    {
      name: 'Angular RxJS',
      description: 'Learn Angular RxJS',
      status: 'inActive',
    },
    {
      name: 'Angular Animations',
      description: 'Learn Angular Animations',
      status: 'inActive',
    },
  ];

  constructor() {}

  getCourses(): Observable<ICourse[]> {
    const courseObservable = new Observable((observer: Observer<ICourse[]>) => {
      setTimeout(() => {
        observer.next(this.courses);
      }, 2000);
    });

    return courseObservable;
  }

  updateCourseStatus(status: 'active' | 'inActive', index: number) {
    this.courses[index].status = status
  }

}
