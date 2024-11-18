import { createFeatureSelector, createSelector, props } from '@ngrx/store';
import { PostsState } from './post.state';

const getPostsState = createFeatureSelector<PostsState>('posts');

export const getPosts = createSelector(getPostsState, (state) => {
  return state.posts;
});

//Passing argument to selector
export const getPostById = (id: string) =>
  createSelector(getPostsState, (state) => {
    return state.posts.find(post => post.id === id)!
  });
