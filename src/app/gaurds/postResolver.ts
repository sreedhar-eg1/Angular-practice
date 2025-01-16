import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const postResolver: ResolveFn<Post[]> = () => {
  const http = inject(HttpClient);

  return http.get<Post[]>(`https://jsonplaceholder.typicode.com/posts`);
};
