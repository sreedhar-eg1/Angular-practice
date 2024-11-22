import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './add-post/add-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { StoreModule } from '@ngrx/store';
import { postsReducer } from './state/post.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PostsEffect } from './state/post.effect';
import { PostDetailComponent } from './post-detail/post-detail.component';

const routes: Routes = [
  {
    path: '',
    component: PostsListComponent,
    children: [
      { path: 'addPost', component: AddPostComponent },
      { path: 'edit/:id', component: EditPostComponent },
    ],
  },
];

@NgModule({
  declarations: [PostsListComponent, AddPostComponent, EditPostComponent, PostDetailComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('posts', postsReducer),
    EffectsModule.forFeature([PostsEffect])
  ],
})
export class PostsModule {}
