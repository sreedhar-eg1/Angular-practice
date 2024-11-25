import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { AddPostComponent } from './posts/add-post/add-post.component';
import { EditPostComponent } from './posts/edit-post/edit-post.component';
import { PostDetailComponent } from './posts/post-detail/post-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'posts',
    component: PostsListComponent,
    children: [
      { path: 'add', component: AddPostComponent },
      { path: 'edit/:id', component: EditPostComponent },
      { path: 'detail/:id', component: PostDetailComponent },
    ],
  },
];
