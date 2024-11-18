import { createReducer, on } from '@ngrx/store';
import { initialState } from './counter.state';
import { changeName, customIncrement, decrement, increment, reset } from './counter.actions';
//reducer is a pure function

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => ({
    ...state,
    counter: state.counter + 1,
  })),
  on(decrement, (state) => ({
    ...state,
    counter: state.counter - 1,
  })),
  on(reset, (state) => ({
    ...state,
    counter: 0,
  })),
  on(customIncrement, (state, action) => {
    console.log(state, action);
    return {
      ...state,
      counter: state.counter + action.count
    }
  }),
  on(changeName, (state) => {
    return {
      ...state,
      name: state.name === 'Sreedhar' ? 'Sreedhar EG' : 'Sreedhar'
    }
  })
);

export function counterReducer(state: any, action: any) {
  return _counterReducer(state, action);
}


//last import the store in App module