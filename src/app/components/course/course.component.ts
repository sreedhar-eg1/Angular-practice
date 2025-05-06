import { Component, input } from '@angular/core';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course',
  imports: [],
  templateUrl: './course.component.html',
  styleUrl: './course.component.scss',

  // Adding styles in the ts file itself
  // styles: [
  //   `
  //    div {
  //     color: red
  //    }
  //   `
  // ]
})
export class CourseComponent {
  course = input<Course>();
}
