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

  addPost(post: Post): Observable<{ name: string }> {
    return this.http.post<{ name: string }>(
      environment.POST_API_URL + 'posts.json',
      post
    );
  }

  editPost(post: Post) {
    const postData = {
      [post.id as string]: { title: post.title, description: post.description },
    };
    return this.http.patch(environment.POST_API_URL + 'posts.json', postData);
  }

  deletepost(id: string) {
    return this.http.delete(environment.POST_API_URL + `posts/${id}.json`)
  }

  getSinglePost(id: string) {
    return this.http.get(environment.POST_API_URL + `posts/${id}.json`)
  }
}
