import {
  animate,
  group,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const conditionalAnimation = trigger('conditionalAnimationTrigger', [
  state('shown', style({})),
  state('hidden', style({})),
  transition('void => shown', [
    style({ opacity: 0 }),
    animate('200ms', style({ opacity: 1 })),
  ]),
  transition('shown => void', animate('200ms', style({ opacity: 0 }))),
]);

export const listAnimation = trigger('listTrigger', [
  transition(':enter', [
    style({
      opacity: 0,
    }),
    group([
      animate(
        200,
        style({
          opacity: 0.5,
          backgroundColor: 'lightyellow',
        })
      ),
      animate(
        300,
        style({
          backgroundColor: 'lightcoral',
        })
      ),
    ]),
    animate(1000),
  ]),
  transition(':leave', [
    animate('1s'),
    style({
      opacity: 0,
    }),
  ]),
]);
