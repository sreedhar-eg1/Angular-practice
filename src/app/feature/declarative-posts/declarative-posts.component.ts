import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { PostDeclarativeService } from '../../services/declarative/post-declarative.service';
import { AsyncPipe } from '@angular/common';
import { CategoryDeclarativeService } from '../../services/declarative/category-declarative.service';
import { BehaviorSubject, combineLatest, map, Observable, share, Subject, tap } from 'rxjs';
import { LoaderService } from '../../services/loader.service';
import { Post } from '../../models/posts.model';

@Component({
  selector: 'app-declarative-posts',
  imports: [AsyncPipe],
  templateUrl: './declarative-posts.component.html',
  styleUrl: './declarative-posts.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeclarativePostsComponent implements OnInit {
  private declarativePostsService = inject(PostDeclarativeService);
  private declarativeCategoryService = inject(CategoryDeclarativeService);
  private loaderService = inject(LoaderService)

  selectedCategoryId = signal('');
  selectedCategorySubject = new BehaviorSubject<string>('');
  selectedCategoryAction$ = this.selectedCategorySubject.asObservable();

  // post$ = this.declarativePostsService.post$
  postWithCategory$ = this.declarativePostsService.postsWithCategory$;
  categories$ = this.declarativeCategoryService.categories$;

  filteredPosts$!: Observable<Post[]>

  constructor() {}

  ngOnInit(): void {
      this.loaderService.showLoader()

      this.filteredPosts$ = combineLatest([
        this.postWithCategory$,
        this.selectedCategoryAction$,
      ]).pipe(
        tap((data) => {
          this.loaderService.hideLoader()
        }),
        map(([posts, categoryId]) =>
          posts.filter((post) =>
            this.selectedCategoryId() ? post.categoryId === categoryId : true
          )
        ),
        share()
      );
  }


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
