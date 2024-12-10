import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { combineLatest, map } from 'rxjs';
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
      map((posts) => {
        let postData: Post[] = [];

        for (const id in posts) {
          postData.push({ ...posts[id], id: id } as Post);
        }

        return postData;
      })
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
    })
  );

  constructor() {}
}
