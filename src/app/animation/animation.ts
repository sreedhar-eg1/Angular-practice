import { animate, state, style, transition, trigger } from '@angular/animations';

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
  transition("default => selected", [animate('2s')])
]);
