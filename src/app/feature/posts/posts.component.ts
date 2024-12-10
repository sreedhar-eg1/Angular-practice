import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { PostsService } from '../../services/imperative/posts.service';
import { Post } from '../../models/posts.model';
import { interval } from 'rxjs';

@Component({
  selector: 'app-posts',
  imports: [],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostsComponent implements OnInit {
  private postsService = inject(PostsService);
  private destroyRef = inject(DestroyRef);
  private detectRef = inject(ChangeDetectorRef)

  posts = signal<Post[]>([]);

  ngOnInit(): void {
    this.getPosts()
  }

  getPosts() {
    const subscription = this.postsService.getPostsWithCategory().subscribe({
      next: (posts) => this.posts.set(posts),
    });

    // this.detectRef.detectChanges()
    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }
}
