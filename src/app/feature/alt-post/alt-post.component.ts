import { Component, inject } from '@angular/core';
import { PostDeclarativeService } from '../../services/declarative/post-declarative.service';
import { AsyncPipe } from '@angular/common';
import { SinglePostComponent } from "../../component/single-post/single-post.component";
import { Post } from '../../models/posts.model';

@Component({
  selector: 'app-alt-post',
  imports: [AsyncPipe, SinglePostComponent],
  templateUrl: './alt-post.component.html',
  styleUrl: './alt-post.component.scss'
})
export class AltPostComponent {
  private declarativePostService = inject(PostDeclarativeService)

  posts$ = this.declarativePostService.postsWithCategory$

  onSelectPost(post: Post) {
    console.log(post);
    
  }
}
