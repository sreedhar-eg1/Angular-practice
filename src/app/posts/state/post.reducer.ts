import { Action, createReducer, on } from '@ngrx/store';
import { intialState, PostsState } from './post.state';
import { addPost, addPostSuccess, deletePost, deletePostSuccess, loadPost, loadPostSuccess, updatePost, updatePostSuccess } from './post.action';

const _postsReducer = createReducer(
  intialState,
  on(addPostSuccess, (state, action) => {
    let post = { ...action.post };

    return {
      ...state,
      posts: [...state.posts, post],
    };
  }),
  on(updatePostSuccess, (state, action) => {
    const updatedPost = state.posts.map((post) =>
      post.id === action.post.id ? action.post : post
    );

    return {
      ...state,
      posts: updatedPost,
    };
  }),
  on(deletePostSuccess, (state, action) => {
    const updatedPost = state.posts.filter((post) => post.id !== action.id)

    return {
        ...state,
        posts: updatedPost
    }
  }),
  on(loadPostSuccess, (state, action) => {
    console.log(state, action);
    return {
      ...state,
      posts: action.post
    }
  })
);

export function postsReducer(
  state: PostsState | undefined,
  action: Action<string>
) {
  return _postsReducer(state, action);
}
