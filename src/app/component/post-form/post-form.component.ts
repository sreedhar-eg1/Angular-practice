import { Component, inject, input, OnInit, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CategoryDeclarativeService } from '../../services/declarative/category-declarative.service';
import { AsyncPipe } from '@angular/common';
import { PostDeclarativeService } from '../../services/declarative/post-declarative.service';
import { combineLatest, startWith, tap } from 'rxjs';
import { toObservable } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../../models/posts.model';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-post-form',
  imports: [ReactiveFormsModule, AsyncPipe],
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.scss',
})
export class PostFormComponent implements OnInit {
  private declarativeCategoryService = inject(CategoryDeclarativeService);
  private declarativePostService = inject(PostDeclarativeService);
  private notificationService = inject(NotificationService)
  private router = inject(Router)
  private activatedRoute = inject(ActivatedRoute);

  postId = signal('');

  // using signal and shorthand
  id = input<string>();
  idObs$ = toObservable(this.id).pipe(
    tap(() => this.declarativePostService.selectPost(this.id() + ''))
  );

  // Using activated Route
  // id = this.activatedRoute.paramMap.pipe(map(paramMap => {
  //   const id = paramMap.get('id')
  //   if (id) {
  //     this.postId.set(id)
  //   }
  //   this.declarativePostService.selectPost(id + '');
  //   return id
  // }))

  form = new FormGroup({
    title: new FormControl('', { validators: [Validators.required] }),
    description: new FormControl('', { validators: [Validators.required] }),
    categoryId: new FormControl(''),
  });

  categories$ = this.declarativeCategoryService.categories$;

  selectedPost$ = this.declarativePostService.singlePost$.pipe(
    tap((post) => {
      post &&
        this.form.patchValue({
          title: post?.title,
          description: post?.description,
          categoryId: post?.categoryId,
        });
    })
  );

  notification$ = this.notificationService.successMessageAction$.pipe(startWith(''), tap((message) => message && this.router.navigate(['/declarativeposts'])))

  vm$ = combineLatest([this.idObs$, this.selectedPost$, this.notification$])
  // vm$ = combineLatest([this.idObs$, this.selectedPost$]);

  ngOnInit(): void {
    // this.id() && this.declarativePostService.selectPost(this.id()!);
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    if (this.postId()) {
      const postDetail = {
        ...this.form.value,
        id: this.postId(),
      };
      this.declarativePostService.editPost(postDetail as Post);
    } else {
      this.declarativePostService.addPost(this.form.value as Post);
    }
  }
}
