import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { Observable } from 'rxjs';
import { Post } from '../../models/post.model';
import { getPosts } from '../state/post.selector';
import { deletePost } from '../state/post.action';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.css'
})
export class PostsListComponent implements OnInit {
  posts$!: Observable<Post[]> 

  private store = inject(Store<AppState>)

  ngOnInit(): void {
      this.posts$ = this.store.select(getPosts)
  }

  onDelete(id: string) {
    if (confirm('Are you sure, u want to delete')) {
      this.store.dispatch(deletePost({id}))
    }
  }
}
