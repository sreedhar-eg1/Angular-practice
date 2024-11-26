import { Component, inject, input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PostsService } from '../posts.service';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.scss',
})
export class PostDetailComponent implements OnInit {
  id = input.required<string>();

  post?: Post

  private postsService = inject(PostsService)

  ngOnInit(): void {
    this.postsService.entities$.subscribe((posts: Post[]) => {
      this.post = posts.find((post) => post.id === this.id())!
    })
  }
}
