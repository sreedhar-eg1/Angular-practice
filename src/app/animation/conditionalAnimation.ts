import {
  animate,
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
