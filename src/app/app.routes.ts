import { Routes } from '@angular/router';
import { PostsComponent } from './feature/posts/posts.component';
import { HomeComponent } from './feature/home/home.component';
import { DeclarativePostsComponent } from './feature/declarative-posts/declarative-posts.component';
import { AltPostComponent } from './feature/alt-post/alt-post.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'declarativeposts', component: DeclarativePostsComponent },
  { path: 'altposts', component: AltPostComponent },
];
