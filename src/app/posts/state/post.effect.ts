import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PostsService } from '../../services/posts.service';
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
import { filter, map, mergeMap, switchMap, tap } from 'rxjs';
import { Router } from '@angular/router';
import { ROUTER_NAVIGATION, RouterNavigatedAction, RouterNavigationAction } from '@ngrx/router-store';
import { Post } from '../../models/post.model';

@Injectable()
export class PostsEffect {
  constructor(
    private action$: Actions,
    private postsServce: PostsService,
    private router: Router
  ) {}

  loadPosts$ = createEffect(() => {
    return this.action$.pipe(
      ofType(loadPost),
      mergeMap((action) => {
        console.log(action);
        return this.postsServce.getPosts().pipe(
          map((post) => {
            return loadPostSuccess({ post });
          })
        );
      })
    );
  });

  addPost$ = createEffect(() => {
    return this.action$.pipe(
      ofType(addPost),
      mergeMap((action) => {
        return this.postsServce.addPost(action.post).pipe(
          map((data) => {
            const post = { ...action.post, id: data.name };
            return addPostSuccess({ post });
          })
        );
      })
    );
  });

  editPost$ = createEffect(() => {
    return this.action$.pipe(
      ofType(updatePost),
      switchMap((action) => {
        return this.postsServce.editPost(action.post).pipe(
          map((data) => {
            return updatePostSuccess({ post: action.post });
          })
        );
      })
    );
  });

  deletePost$ = createEffect(() => {
    return this.action$.pipe(
      ofType(deletePost),
      switchMap((action) => {
        return this.postsServce.deletepost(action.id).pipe(
          map((data) => {
            return deletePostSuccess({ id: action.id });
          })
        );
      })
    );
  });

  redirectOnSuccess$ = createEffect(
    () => {
      return this.action$.pipe(
        ofType(...[addPostSuccess, updatePostSuccess]),
        tap((action) => {
          this.router.navigate(['posts']);
        })
      );
    },
    { dispatch: false }
  );

  getSinglePost$ = createEffect(
    () => {
      return this.action$.pipe(
        ofType(ROUTER_NAVIGATION),
        filter((r: RouterNavigatedAction) => {
          return r.payload.routerState.url.startsWith('/posts/detail');
        }),
        map((r: RouterNavigatedAction) => {
          return (r.payload.routerState as any)["params"]["id"];
        }),
        switchMap((id) => {
          return this.postsServce.getSinglePost(id).pipe(
            map((post) => {
              const postData: Post[] = [({...post, id}) as Post]
              return loadPostSuccess({post: postData})
            })
          );
        })
      );
    }
  );
}
