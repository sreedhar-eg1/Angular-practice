import { CounterState } from "../counter/counter/state/counter.state";
import { PostsState } from "../posts/state/post.state";
import { counterReducer } from '../counter/counter/state/counter.reducer';
import { postsReducer } from '../posts/state/post.reducer';
import { SHARED_STATE_NAME } from "./shared/shared.selector";
import { SharedState } from "./shared/shared.state";
import { sharedReducer } from "./shared/shared.reducer";

export interface AppState {
    // counter: CounterState,
    // posts: PostsState
    [SHARED_STATE_NAME]: SharedState
}

export const appReducer = {
    // counter: counterReducer,
    // posts: postsReducer
    [SHARED_STATE_NAME]: sharedReducer
}