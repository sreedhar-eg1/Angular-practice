import { createFeatureSelector, createSelector, props } from '@ngrx/store';
import { postsAdaptor, PostsState } from './post.state';
import { getCurrentRoute } from '../../store/router/router.selector';
import { RouterStateUrl } from '../../store/router/custom-route-serializer';

export const postsSelector = postsAdaptor.getSelectors();

const getPostsState = createFeatureSelector<PostsState>('posts');

export const getPosts = createSelector(getPostsState, postsSelector.selectAll);

export const getPostsEntities = createSelector(
  getPostsState,
  postsSelector.selectEntities
);

//Passing argument to selector
export const getPostById = createSelector(
  getPostsEntities,
  getCurrentRoute,
  (posts, router: RouterStateUrl) => {
    // return state.posts.find(post => post.id === id)!
    return posts ? posts[router.params['id']] : null;
  }
);

export const getCount = createSelector(getPostsState, (state) => state.count);
