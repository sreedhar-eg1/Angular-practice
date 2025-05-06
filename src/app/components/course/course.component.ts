import { Component, input } from '@angular/core';
import { Course } from '../../models/course.model';
import { AuthorComponent } from "../author/author.component";

@Component({
  selector: 'app-course',
  imports: [AuthorComponent],
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
