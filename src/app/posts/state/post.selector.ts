import { createFeatureSelector, createSelector, props } from '@ngrx/store';
import { PostsState } from './post.state';
import { getCurrentRoute } from '../../store/router/router.selector';
import { RouterStateUrl } from '../../store/router/custom-route-serializer';

const getPostsState = createFeatureSelector<PostsState>('posts');

export const getPosts = createSelector(getPostsState, (state) => {
  return state.posts;
});

//Passing argument to selector
export const getPostById = createSelector(
  getPosts,
  getCurrentRoute,
  (posts, router: RouterStateUrl) => {
    // return state.posts.find(post => post.id === id)!
    return posts ? posts.find((post) => post.id === router.params['id']) : null;
  }
);
