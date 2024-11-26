import {
  DefaultDataService,
  HttpOptions,
  HttpUrlGenerator,
  Logger,
} from '@ngrx/data';
import { Post } from '../models/post.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { environment } from '../../environment/environment';
import { Update } from '@ngrx/entity';

@Injectable()
export class PostDataService extends DefaultDataService<Post> {
  constructor(
    http: HttpClient,
    httpUrlGenerator: HttpUrlGenerator,
    logger: Logger
  ) {
    super('Post', http, httpUrlGenerator);
  }

  override getAll(): Observable<Post[]> {
    return this.http.get<Post[]>(`${environment.POST_API_URL}posts.json`).pipe(
      map((data) => {
        const posts: Post[] = [];
        for (const key in data) {
          if (data.hasOwnProperty(key)) {
            posts.push({ ...data[key], id: key });
          }
        }
        return posts;
      })
    );
  }

  override add(entity: Post): Observable<Post> {
    return this.http
      .post<{ name: string }>(`${environment.POST_API_URL}posts.json`, entity)
      .pipe(
        map((data) => {
          const post = { ...entity, id: data.name };
          return post;
        })
      );
  }

  override update(post: Update<Post>, options?: HttpOptions): Observable<Post> {
    return this.http.put<Post>(
      `${environment.POST_API_URL}posts/${post.id}.json`,
      {
        ...post.changes,
      }
    );
  }

  override delete(id: string, options?: HttpOptions): Observable<string> {
    return this.http
      .delete(`${environment.POST_API_URL}posts/${id}.json`)
      .pipe(map((data) => id));
  }
}
