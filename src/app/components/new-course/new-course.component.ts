import { Component, output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ICourse } from '../../models/course.model';
import { newCourseAnimation } from '../../animation/newCourse';

@Component({
  selector: 'app-new-course',
  imports: [ReactiveFormsModule],
  templateUrl: './new-course.component.html',
  styleUrl: './new-course.component.scss',
  animations: [newCourseAnimation]
})
export class NewCourseComponent {
  createCourse = output<ICourse>()
  close = output()

  newCourseForm = new FormGroup({
    name: new FormControl('', { validators: [Validators.required] }),
    description: new FormControl(''),
    status: new FormControl(''),
  });

  onSubmit() {
    this.createCourse.emit(this.newCourseForm.value as ICourse)
  }

  onClose() {
    this.close.emit()
  }
}
