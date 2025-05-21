import { Component, inject, OnInit, signal } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { ICourse, Status } from '../../models/course.model';
import { AngCourseComponent } from '../ang-course/ang-course.component';
import { NgClass } from '@angular/common';
import { courseAddAnimation, triggerState } from '../../animation/animation';
import { NewCourseComponent } from "../new-course/new-course.component";

@Component({
  selector: 'app-courses',
  imports: [AngCourseComponent, NgClass, NewCourseComponent],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
  animations: [triggerState, courseAddAnimation]
})
export class CoursesComponent implements OnInit {
  private courseService = inject(CourseService);

  courses = signal<ICourse[]>([]);
  selectedCourse = signal<number | undefined>(undefined);

  loading = signal(false)

  createNewCourse = signal(false)

  ngOnInit(): void {
    this.loading.set(true)
    this.courseService.getCourses().subscribe({
      next: (courses) => {
        this.loading.set(false)
        this.courses.set(courses);
      },
    });
  }

  updateStatus(status: Status, i: number) {
    const updatedCourses = [...this.courses()];
    updatedCourses[i] = { ...updatedCourses[i], status };
    this.courses.set(updatedCourses);
  }

  onDeleteCourse(index: number) {
    const updatedCourses = [...this.courses()];
    updatedCourses.splice(index, 1);
    this.courses.set(updatedCourses);
  }

  onSelectedCourse(index: number) {
    if (this.courses()[index].status === 'inActive') return;
    this.selectedCourse.set(index);
  }

  onCreateCourse(newCourse: ICourse) {
   this.courses.update(prevCourse => [newCourse, ...prevCourse])
   this.createNewCourse.set(false)
  }

  onClose() {
    this.createNewCourse.set(false)
  }
}
