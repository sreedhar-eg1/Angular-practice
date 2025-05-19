import { Component, ElementRef, input, output, viewChild } from '@angular/core';
import { ICourse, Status } from '../../models/course.model';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-ang-course',
  imports: [NgClass],
  templateUrl: './ang-course.component.html',
  styleUrl: './ang-course.component.scss'
})
export class AngCourseComponent {
  course = input.required<ICourse>()

  statusElement = viewChild<ElementRef<HTMLSelectElement>>('statusRef')
  statusUpdate = output<Status>()
  deleteCourse = output()

  onUpdateStatus() {
    const selectedStatus = this.statusElement()?.nativeElement.value! as Status

    this.statusUpdate.emit(selectedStatus)
  }

  onDeleteCourse() {
    this.deleteCourse.emit()
  }
}
