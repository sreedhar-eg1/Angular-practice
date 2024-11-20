import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { Post } from '../../models/post.model';
import { addPost } from '../state/post.action';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrl: './add-post.component.css',
  host: {
    class: 'w-full'
  }
})
export class AddPostComponent {
  postForm = new FormGroup({
    title: new FormControl(null, {validators: [Validators.required, Validators.minLength(4)]}),
    description: new FormControl(null, {validators: [Validators.required, Validators.minLength(10)]})
  })

  constructor(private store: Store<AppState>) {}

  onAddPost() {
    if (this.postForm.invalid) {
      return
    }

    const post: Post = {
      title: this.postForm.value.title!,
      description: this.postForm.value.description!
    }

    this.store.dispatch(addPost({post}))
  }
}
