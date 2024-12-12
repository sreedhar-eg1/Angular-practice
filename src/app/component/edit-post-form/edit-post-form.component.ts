import { Component, inject, input, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CategoryDeclarativeService } from '../../services/declarative/category-declarative.service';
import { AsyncPipe } from '@angular/common';
import { Post } from '../../models/posts.model';
import { PostDeclarativeService } from '../../services/declarative/post-declarative.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-edit-post-form',
  imports: [ReactiveFormsModule, AsyncPipe],
  templateUrl: './edit-post-form.component.html',
  styleUrl: './edit-post-form.component.scss',
})
export class EditPostFormComponent {
  private declarativeCategoryService = inject(CategoryDeclarativeService);
  private declarativePostService = inject(PostDeclarativeService);

  postId = signal('')

  selectedPost$ = this.declarativePostService.singlePost$.pipe(
    tap((post) => {
      this.postId.set(post?.id!)
      this.editPostForm.patchValue({
        title: post?.title,
        description: post?.description,
        categoryId: post?.categoryId,
      });
    })
  );

  categories$ = this.declarativeCategoryService.categories$;

  editPostForm = new FormGroup({
    title: new FormControl('', { validators: [Validators.required] }),
    description: new FormControl('', { validators: [Validators.required] }),
    categoryId: new FormControl(''),
  });

  onEditPost() {
    if (this.editPostForm.invalid) {
      return;
    }

    const postData = {
      ...this.editPostForm.value,
      id: this.postId()
    }

    this.declarativePostService.editPost(postData as Post)
  }
}
