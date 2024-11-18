import { createAction, props } from '@ngrx/store';

//state
//actions
//reducer

export const increment = createAction('increment');

export const decrement = createAction('decrement');

export const reset = createAction('reset');

export const customIncrement = createAction(
  'customIncrement',
  props<{ count: number }>()
);

export const changeName = createAction('changeName')
