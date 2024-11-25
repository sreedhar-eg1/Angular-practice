import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostsService } from '../posts.service';
import { Observable } from 'rxjs';
import { Post } from '../../models/post.model';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-posts-list',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe],
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.scss',
})
export class PostsListComponent implements OnInit {
  posts!: Observable<Post[]>;

  private postsService = inject(PostsService);

  ngOnInit(): void {
    this.posts = this.postsService.getAll();
  }
}
