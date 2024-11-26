import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PostsService } from '../posts.service';
import { Post } from '../../models/post.model';import { Router } from '@angular/router';
;

@Component({
  selector: 'app-add-post',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-post.component.html',
  styleUrl: './add-post.component.scss',
  host: {
    'class': 'w-full'
  }
})
export class AddPostComponent {
  postsForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
  });

  private postsService = inject(PostsService)
  private router = inject(Router)

  onSubmit() {
    console.log(this.postsForm.value);

    const post: Post = this.postsForm.value as Post
    this.postsService.add(post).subscribe((data) => {
      this.router.navigate(['/posts'])
    })
    
  }
}
