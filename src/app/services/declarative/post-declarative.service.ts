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
} from 'rxjs';
import { Post } from '../../models/posts.model';
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
}
