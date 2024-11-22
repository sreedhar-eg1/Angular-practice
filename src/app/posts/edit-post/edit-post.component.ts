import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppState } from '../../store/app.state';
import { Store } from '@ngrx/store';
import { getPostById } from '../state/post.selector';
import { Post } from '../../models/post.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { updatePost } from '../state/post.action';
import { tap } from 'rxjs';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrl: './edit-post.component.css',
  host: {
    class: 'w-full'
  }
})
export class EditPostComponent implements OnInit {
  post!: Post;
  id!: string;

  private destroyRef = inject(DestroyRef);

  edtPostForm = new FormGroup({
    title: new FormControl('', {
      validators: [Validators.required, Validators.minLength(4)],
    }),
    description: new FormControl('', {
      validators: [Validators.required, Validators.minLength(10)],
    }),
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    const subscription = this.store.select(getPostById).subscribe((post) => {
      this.post = post!
      this.patchValue()
    })

    this.destroyRef.onDestroy(() => subscription.unsubscribe());

    // this.route.paramMap.subscribe((params) => {
    //   this.id = params.get('id')!;
    //   const subscription = this.store
    //     .select(getPostById(this.id!))
    //     .subscribe((data) => {
    //       this.post = data;
    //     });

    //   this.patchValue();

    //   this.destroyRef.onDestroy(() => subscription.unsubscribe());
    // });
  }

  patchValue() {
    this.edtPostForm.patchValue({
      title: this.post?.title,
      description: this.post?.description,
    });
  }

  onUpdatePost() {
    if (this.edtPostForm.invalid) {
      return;
    }

    const post: Post = {
      id: this.post.id,
      title: this.edtPostForm.value.title!,
      description: this.edtPostForm.value.description!,
    };

    this.store.dispatch(updatePost({ post }));

    // this.router.navigate(['posts'])
  }
}
