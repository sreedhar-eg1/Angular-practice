import {
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const newCourseAnimation = trigger('newCourseTrigger', [
  state(
    'valid',
    style({
      backgroundColor: 'green',
    })
  ),
  state(
    'invalid',
    style({
      backgroundColor: 'red',
    })
  ),
  transition('valid <=> invalid', 
    [animate('1000ms ease-in',
        keyframes([
            style({transform: 'scale(1.1)', offset: 0.4}),
            style({transform: 'scale(1)', offset: 1})
        ])
    )]),
]);
