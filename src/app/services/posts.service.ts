import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { map, Observable } from 'rxjs';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(environment.POST_API_URL + 'posts.json').pipe(
      map((data: any) => {
        const posts: Post[] = [];
        for (let key in data) {
          posts.push({ ...data[key], id: key });
        }
        return posts;
      })
    );
  }
}
