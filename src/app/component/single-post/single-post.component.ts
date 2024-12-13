import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { PostDeclarativeService } from '../../services/declarative/post-declarative.service';
import { AsyncPipe } from '@angular/common';
import { BehaviorSubject, catchError, EMPTY, tap } from 'rxjs';
import { Post } from '../../models/posts.model';

import { EditPostFormComponent } from "../edit-post-form/edit-post-form.component";

@Component({
  selector: 'app-single-post',
  imports: [ AsyncPipe, EditPostFormComponent],
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SinglePostComponent {
  private declarativePostService = inject(PostDeclarativeService);

  errorMessageSubject = new BehaviorSubject<string>('');
  errormessageAction$ = this.errorMessageSubject.asObservable();

  showEditForm = signal(false);
  postData = signal<Post>({title: '', description: ''}) 

  // errorMessage = signal('');
  // errorMessage = ''

  selectedPost$ = this.declarativePostService.singlePost$.pipe(
    tap(() => this.showEditForm.set(false)),
    catchError((error: string) => {
      // this.errorMessage.set(error);
      // this.errorMessage = error
      this.errorMessageSubject.next(error);
      return EMPTY;
    })
  );

  onClickEditPost(post: Post) {
    this.showEditForm.update((oldVal) => true);

    this.postData.set(post)

    // this.editPostForm.patchValue({
    //   title: post.title,
    //   description: post.description,
    //   categoryId: post.categoryId,
    // });
  }

  onClickDeletePost(post: Post) {
    if (confirm('Are you sure you want to delete?')) {
      this.declarativePostService.deletePost(post)
    }
  }

}
