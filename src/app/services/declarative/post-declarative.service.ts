import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import {
  catchError,
  combineLatest,
  map,
  Subject,
  throwError,
  shareReplay,
  delay,
  merge,
  scan,
  Observable,
  concatMap,
  EMPTY,
  toArray,
  of,
} from 'rxjs';
import { CRUDAction, Post } from '../../models/posts.model';
import { CategoryDeclarativeService } from './category-declarative.service';

@Injectable({
  providedIn: 'root',
})
export class PostDeclarativeService {
  private http = inject(HttpClient);
  private categoryService = inject(CategoryDeclarativeService);

  post$ = this.http
    .get<{ [id: string]: Post }[]>(
      'https://angular-rxjs-advance-default-rtdb.firebaseio.com/posts.json'
    )
    .pipe(
      delay(1000),
      map((posts) => {
        let postData: Post[] = [];

        for (const id in posts) {
          postData.push({ ...posts[id], id: id } as Post);
        }

        return postData;
      }),
      shareReplay(1),
      catchError(this.handleErrror)
    );

  postsWithCategory$ = combineLatest([
    this.post$,
    this.categoryService.categories$,
  ]).pipe(
    map(([posts, categories]) => {
      return posts.map((post) => ({
        ...post,
        categoryName: categories.find(
          (category) => post.categoryId === category.id
        )?.title,
      }));
    }),
    shareReplay(1),
    catchError(this.handleErrror)
  );

  private selectPostSubject = new Subject<string>();
  selectPostAction$ = this.selectPostSubject.asObservable();

  selectPost(postId: string) {
    this.selectPostSubject.next(postId);
  }

  singlePost$ = combineLatest<[Post[], string]>([
    this.postsWithCategory$,
    this.selectPostAction$,
  ]).pipe(
    map(([posts, selectedPostId]) =>
      posts.find((post) => post.id === selectedPostId)
    ),
    shareReplay(1),
    catchError(this.handleErrror)
  );

  handleErrror(error: Error) {
    return throwError(() => {
      return 'Unknown error occured. Please try again.';
    });
  }

  private postCrudSubject = new Subject<CRUDAction<Post>>();
  postCrudAction$ = this.postCrudSubject.asObservable();

  allPost$ = merge(
    this.postsWithCategory$,
    this.postCrudAction$.pipe(
      concatMap((postAction) =>
        this.postOperation(postAction).pipe(
          map((post) => ({ ...postAction, data: post }))
        )
      )
    )
  ).pipe(
    scan(
      (posts, addedPost) => this.modifyPostData(posts, addedPost),
      [] as Post[]
    ),
    shareReplay(1)
  );

  postOperation(postAction: CRUDAction<Post>) {
    let responseData$!: Observable<Post>;

    if (postAction.action === 'add') {
      responseData$ = this.savePost(postAction.data);
    }

    if (postAction.action === 'update') {
      responseData$ = this.updatePost(postAction.data);
    }

    return responseData$.pipe(
      concatMap((post) =>
        this.categoryService.categories$.pipe(
          map((categories) => ({
            ...post,
            categoryName: categories.find(
              (category) => category.id === post.categoryId
            )?.title,
          }))
        )
      )
    );
  }

  savePost(post: Post) {
    return this.http
      .post<{ name: string }>(
        'https://angular-rxjs-advance-default-rtdb.firebaseio.com/posts.json',
        post
      )
      .pipe(map((id) => ({ ...post, id: id.name })));
  }

  updatePost(post: Post) {
    return this.http.patch<Post>(
      `https://angular-rxjs-advance-default-rtdb.firebaseio.com/${post.id}.json`,
      post
    );
  }

  modifyPostData(posts: Post[], crudOperationData: Post[] | CRUDAction<Post>) {
    if (!(crudOperationData instanceof Array)) {
      if (crudOperationData.action === 'add') {
        return [...posts, crudOperationData.data];
      }

      if (crudOperationData.action === 'update') {
        return posts.map((post) =>
          post.id === crudOperationData.data.id ? crudOperationData.data : post
        );
      }
    } else {
      return crudOperationData;
    }

    return posts;
  }

  addPost(post: Post) {
    this.postCrudSubject.next({ action: 'add', data: post });
  }

  editPost(post: Post) {
    this.postCrudSubject.next({ action: 'update', data: post });
  }
}
