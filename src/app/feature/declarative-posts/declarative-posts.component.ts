import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { PostDeclarativeService } from '../../services/declarative/post-declarative.service';
import { AsyncPipe } from '@angular/common';
import { CategoryDeclarativeService } from '../../services/declarative/category-declarative.service';
import { BehaviorSubject, combineLatest, map, Subject } from 'rxjs';

@Component({
  selector: 'app-declarative-posts',
  imports: [AsyncPipe],
  templateUrl: './declarative-posts.component.html',
  styleUrl: './declarative-posts.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeclarativePostsComponent {
  private declarativePostsService = inject(PostDeclarativeService);
  private declarativeCategoryService = inject(CategoryDeclarativeService);

  selectedCategoryId = signal('');
  selectedCategorySubject = new BehaviorSubject<string>('');
  selectedCategoryAction$ = this.selectedCategorySubject.asObservable();

  // post$ = this.declarativePostsService.post$
  postWithCategory$ = this.declarativePostsService.postsWithCategory$;
  categories$ = this.declarativeCategoryService.categories$;

  filteredPosts$ = combineLatest([
    this.postWithCategory$,
    this.selectedCategoryAction$,
  ]).pipe(
    map(([posts, categoryId]) =>
      posts.filter((post) =>
        this.selectedCategoryId() ? post.categoryId === categoryId : true
      )
    )
  );

  // filteredPosts$ = this.postWithCategory$.pipe(
  //   map((posts) => {
  //     return posts.filter((post) =>
  //       this.selectedCategoryId()
  //         ? post.categoryId === this.selectedCategoryId()
  //         : true
  //     );
  //   })
  // );

  onChangeCategory(event: Event) {
    this.selectedCategoryId.set((event.target as HTMLSelectElement).value);
    this.selectedCategorySubject.next(
      (event.target as HTMLSelectElement).value
    );
  }
}
