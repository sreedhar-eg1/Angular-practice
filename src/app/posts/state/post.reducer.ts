import { Action, createReducer, on } from '@ngrx/store';
import { intialState, postsAdaptor, PostsState } from './post.state';
import {
  addPost,
  addPostSuccess,
  deletePost,
  deletePostSuccess,
  loadPost,
  loadPostSuccess,
  updatePost,
  updatePostSuccess,
} from './post.action';
import { Post } from '../../models/post.model';

const _postsReducer = createReducer(
  intialState,
  on(addPostSuccess, (state, action) => {
    return postsAdaptor.addOne(action.post, {
      ...state,
      count: state.count + 1,
    });
  }),
  on(updatePostSuccess, (state, action) => {
    return postsAdaptor.updateOne(action.post, state);
  }),
  on(deletePostSuccess, (state, { id }) => {
    return postsAdaptor.removeOne(id, state);
  }),
  on(loadPostSuccess, (state, action) => {
    return postsAdaptor.setAll(action.post, state);
  })
);

export function postsReducer(
  state: PostsState | undefined,
  action: Action<string>
) {
  return _postsReducer(state, action);
}
