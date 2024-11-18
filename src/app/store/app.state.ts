import { CounterState } from "../counter/counter/state/counter.state";
import { PostsState } from "../posts/state/post.state";
import { counterReducer } from '../counter/counter/state/counter.reducer';
import { postsReducer } from '../posts/state/post.reducer';

export interface AppState {
    counter: CounterState,
    posts: PostsState
}

export const appReducer = {
    counter: counterReducer,
    posts: postsReducer
}