import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PostsService } from '../posts.service';
import { Observable } from 'rxjs';
import { Post } from '../../models/post.model';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-posts-list',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe, RouterLink],
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.scss',
})
export class PostsListComponent implements OnInit {
  loading$!: Observable<boolean>;
  posts$!: Observable<Post[]>;

  private postsService = inject(PostsService);

  constructor() {
    // this.posts$ = this.postsService.entities$;
    this.loading$ = this.postsService.loading$;
  }

  ngOnInit(): void {
    this.posts$ = this.postsService.entities$;
  }

  onDelete(event: Event, id: string) {
    event.preventDefault();

    if (confirm('Are you sure that you want to delete?')) {
      this.postsService.delete(id);
    }
  }
}
