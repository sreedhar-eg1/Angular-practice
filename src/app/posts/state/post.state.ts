import { Post } from '../../models/post.model';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

//With NGRX Entity
export interface PostsState extends EntityState<Post> {
  count: number;
}

export const postsAdaptor: EntityAdapter<Post> = createEntityAdapter<Post>({
  selectId: selectPostId,
  sortComparer: sortByName,
});

export const intialState: PostsState = postsAdaptor.getInitialState({
  count: 0,
});

export function selectPostId(post: Post): string {
  return post.id!;
}

export function sortByName(a: Post, b: Post): number {
  return a.title.localeCompare(b.title);
}
