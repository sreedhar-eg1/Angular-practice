import {
  Component,
  ElementRef,
  HostBinding,
  inject,
  Renderer2,
  viewChild,
} from '@angular/core';
import { NgStyleCompComponent } from '../ng-style-comp/ng-style-comp.component';
import { Course } from '../../models/course.model';
import { CourseComponent } from '../course/course.component';
import { NgClass } from '@angular/common';
import { routeAnimation } from '../../animation/routeAnimation';

@Component({
  selector: 'app-basics',
  imports: [NgStyleCompComponent, CourseComponent, NgClass],
  templateUrl: './basics.component.html',
  styleUrl: './basics.component.scss',
  animations: [routeAnimation],
})
export class BasicsComponent {
  paraElement = viewChild<ElementRef<HTMLParagraphElement>>('paraRef');
  @HostBinding('@routeAnimationTrigger') routeAnimation = true;

  private renderer2 = inject(Renderer2);

  title = 'angular-animation';
  courses: Course[] = [
    { title: 'Angular Complete Course', isActive: false },
    { title: 'Angular Animation', isActive: false },
    { title: 'Angular RxJS', isActive: false },
  ];

  onChangeColor(element: HTMLParagraphElement) {
    // change color using native javascript
    // element.style.color = 'red';
    console.log(element);

    // change color using renderer2
    // this.renderer2.setStyle(element, 'color', 'red');

    // change color using renderer2 and viewChild
    this.renderer2.setStyle(this.paraElement()?.nativeElement, 'color', 'red');
  }
}
