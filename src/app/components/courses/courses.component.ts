import {
  Component,
  effect,
  HostBinding,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { CourseService } from '../../services/course.service';
import { ICourse, Status } from '../../models/course.model';
import { AngCourseComponent } from '../ang-course/ang-course.component';
import { NgClass } from '@angular/common';
import {
  courseAddAnimation,
  newCourseAnimation,
  staggeredListAnimation,
  triggerState,
} from '../../animation/animation';
import { NewCourseComponent } from '../new-course/new-course.component';
import { AnimationEvent } from '@angular/animations';
import { routeAnimation } from '../../animation/routeAnimation';

@Component({
  selector: 'app-courses',
  imports: [AngCourseComponent, NgClass, NewCourseComponent],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
  animations: [
    triggerState,
    courseAddAnimation,
    newCourseAnimation,
    routeAnimation,
    staggeredListAnimation,
  ],
})
export class CoursesComponent implements OnInit {
  private courseService = inject(CourseService);

  @HostBinding('@routeAnimationTrigger') routeAnimation = true;

  courses = signal<ICourse[]>([]);
  selectedCourse = signal<number | undefined>(undefined);

  loading = signal(false);

  createNewCourse = signal(false);

  displayedCourse = signal<ICourse[]>([]);

  constructor() {}

  ngOnInit(): void {
    this.loading.set(true);
    this.courseService.getCourses().subscribe({
      next: (courses) => {
        this.loading.set(false);
        this.courses.set(courses);
        this.displayedCourse.update((prevCourse) => [
          ...prevCourse,
          this.courses()[0],
        ]);
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
    this.selectedCourse.set(undefined);
  }

  onSelectedCourse(index: number) {
    if (this.courses()[index]?.status === 'inActive') return;
    this.selectedCourse.set(index);
  }

  onCreateCourse(newCourse: ICourse) {
    this.courses.update((prevCourse) => [newCourse, ...prevCourse]);
    this.createNewCourse.set(false);
  }

  onClose() {
    this.createNewCourse.set(false);
  }

  onAnimationStart(event: AnimationEvent) {
    // console.log(event);
  }

  onAnimationEnd(event: AnimationEvent, index: number) {
    // console.log(event, index);
    // if (event.fromState !== 'void') return;
    // if (this.courses().length > index + 1) {
    //   this.displayedCourse.update((prevCourse) => [
    //     ...prevCourse,
    //     this.courses()[index + 1],
    //   ]);
    // } else {
    //   this.displayedCourse.set(this.courses());
    // }
  }
}
