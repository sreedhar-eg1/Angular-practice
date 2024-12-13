import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { PostDeclarativeService } from '../../services/declarative/post-declarative.service';
import { AsyncPipe, NgClass } from '@angular/common';
import { SinglePostComponent } from '../../component/single-post/single-post.component';
import { Post } from '../../models/posts.model';
import { combineLatest, map, tap } from 'rxjs';
import { AddPostFormComponent } from '../../component/add-post-form/add-post-form.component';

@Component({
  selector: 'app-alt-post',
  imports: [AsyncPipe, SinglePostComponent, NgClass, AddPostFormComponent],
  templateUrl: './alt-post.component.html',
  styleUrl: './alt-post.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AltPostComponent {
  private declarativePostService = inject(PostDeclarativeService);

  showAddPostForm = signal(false);

  // posts$ = this.declarativePostService.postsWithCategory$.pipe(
  //   tap(
  //     (posts) =>
  //       posts[0].id && this.declarativePostService.selectPost(posts[0].id)
  //   )
  // );
  posts$ = this.declarativePostService.allPost$.pipe(
    tap(
      (posts) =>
        posts[0].id && this.declarativePostService.selectPost(posts[0].id)
    )
  );

  selectedPost$ = this.declarativePostService.singlePost$;

  vm$ = combineLatest([this.posts$, this.selectedPost$]).pipe(
    map(([posts, selectedPost]) => ({ posts, selectedPost }))
  );

  onSelectPost(post: Post) {
    post.id && this.declarativePostService.selectPost(post.id);
  }

  onAddPost() {
    this.showAddPostForm.set(true);
  }
}
