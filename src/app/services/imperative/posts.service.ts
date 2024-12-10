import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, mergeMap, Observable } from 'rxjs';
import { Post } from '../../models/posts.model';
import { CategoriesService } from './categories.service';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(
    private http: HttpClient,
    private categoryService: CategoriesService
  ) {}

  getPosts(): Observable<Post[]> {
    return this.http
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
  }

  getPostsWithCategory() {
    return this.getPosts().pipe(
      mergeMap((posts) => {
        return this.categoryService.getCategories().pipe(
          map((categories) => {
            return posts.map((post) => ({
              ...post,
              categoryName: categories.find(
                (category) => category.id === post.categoryId
              )?.title,
            }));
          })
        );
      })
    );
  }
}
