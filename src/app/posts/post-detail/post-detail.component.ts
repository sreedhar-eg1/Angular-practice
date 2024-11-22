import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../../models/post.model';
import { AppState } from '../../store/app.state';
import { Store } from '@ngrx/store';
import { getPostById } from '../state/post.selector';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.css'
})
export class PostDetailComponent implements OnInit {
  post!: Observable<Post | null | undefined>

  private store = inject(Store<AppState>)

  ngOnInit(): void {
     this.post =  this.store.select(getPostById)
  }
}
