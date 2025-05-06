import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Course } from './models/course.model';
import { CourseComponent } from './components/course/course.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CourseComponent, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-animation';
  courses: Course[] = [
    { title: 'Angular Complete Course', isActive: false },
    { title: 'Angular Animation', isActive: false },
    { title: 'Angular RxJS', isActive: false },
  ];
}
