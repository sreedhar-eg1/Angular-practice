import {
  animate,
  keyframes,
  query,
  stagger,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const triggerState = trigger('selectedTrigger', [
  state(
    'default',
    style({
      border: '1px solid black',
      margin: '3rem 0',
      padding: '2rem',
      boxShadow: '2px 2px 2px 5px #ccc',
    })
  ),
  state(
    'selected',
    style({
      border: '1px solid blue',
      boxShadow: '3px 3px 2px 1px blue',
      backgroundColor: 'lightblue',
    })
  ),
  transition('default => selected', [animate('2s')]),
]);

// without keyframes
// export const courseAddAnimation = trigger('courseAddTrigger', [
//   transition(':enter', [
//     style({
//       opacity: 0,
//       transform: 'translateX(-100%)'
//     }),
//     animate('800ms ease-out', style({
//       opacity: 1,
//       transform: 'translateX(0)'
//     }))
//   ]),
//   transition(':leave', [
//     animate('400ms ease-in', style({
//       opacity: 1,
//       transform: 'translateX(100%)'
//     }))
//   ])
// ])

// with keyframes
export const courseAddAnimation = trigger('courseAddTrigger', [
  transition(':enter', [
    animate(
      '800ms ease-out',
      keyframes([
        style({
          opacity: 0,
          transform: 'translateX(-100%)',
          offset: 0,
        }),
        style({
          opacity: 1,
          transform: 'translateX(10%)',
          offset: 0.4,
        }),
        style({
          opacity: 1,
          transform: `translateX(0)`,
          offset: 1,
        }),
      ])
    ),
  ]),
  transition(':leave', [
    animate(
      '800ms ease-in',
      keyframes([
        style({ transform: 'translateX(-10%)', offset: 0 }),
        style({ transform: 'translateX(0%)', offset: 0.3 }),
        style({ opacity: 0, transform: 'translateX(100%)', offset: 1 }),
      ])
    ),
  ]),
]);

export const newCourseAnimation = trigger('newCourseTrigger', [
  transition(':enter', [
    style({
      transform: 'translateY(-100%)',
    }),
    animate(
      '1000ms',
      style({
        transform: 'translateY(0%)',
      })
    ),
  ]),
  transition(':leave', [
    style({
      transform: 'translateY(0%)',
    }),
    animate(
      '1000ms',
      style({
        transform: 'translateY(-100%)',
      })
    ),
  ]),
]);

export const staggeredListAnimation = trigger('staggeredListTrigger', [
  transition('* => *', [
    query(
      ':enter',
      [
        style({
          opacity: 0,
          transform: 'translateX(-100%)',
        }),
        stagger(200, [
          animate(
            '800ms ease-out',
            keyframes([
              style({
                opacity: 1,
                transform: 'translateX(10%)',
                offset: 0.4,
              }),
              style({
                opacity: 1,
                transform: `translateX(0)`,
                offset: 1,
              }),
            ])
          ),
        ]),
      ],
      { optional: true }
    ),
  ]),
]);
