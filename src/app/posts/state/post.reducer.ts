import { Action, createReducer, on } from '@ngrx/store';
import { intialState, PostsState } from './post.state';
import { addPost, deletePost, loadPost, loadPostSuccess, updatePost } from './post.action';

const _postsReducer = createReducer(
  intialState,
  on(addPost, (state, action) => {
    let post = { ...action.post };
    post.id = (state.posts.length + 1).toString();

    return {
      ...state,
      posts: [...state.posts, post],
    };
  }),
  on(updatePost, (state, action) => {
    console.log(state, action);
    const updatedPost = state.posts.map((post) =>
      post.id === action.post.id ? action.post : post
    );

    return {
      ...state,
      posts: updatedPost,
    };
  }),
  on(deletePost, (state, action) => {
    const updatedPost = state.posts.filter((post) => post.id !== action.id)

    return {
        ...state,
        posts: updatedPost
    }
  }),
  on(loadPostSuccess, (state, action) => {
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
