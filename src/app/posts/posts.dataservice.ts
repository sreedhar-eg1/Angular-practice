import { DefaultDataService, HttpUrlGenerator, Logger } from '@ngrx/data';
import { Post } from '../models/post.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { environment } from '../../environment/environment';

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
    return this.http.get<Post[]>(`${environment.POST_API_URL}/posts.json`).pipe(
      map(data => {
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
  
}
