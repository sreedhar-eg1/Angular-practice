import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PostsService } from '../posts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-edit-post',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-post.component.html',
  styleUrl: './edit-post.component.scss',
})
export class EditPostComponent implements OnInit {
  id!: string;
  post!: Post;

  editPostForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
  });

  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    route.paramMap.subscribe((params) => {
      this.id = params.get('id')!;
      console.log(this.id);
    });
  }

  ngOnInit(): void {
    this.postsService.entities$.subscribe((posts: Post[]) => {
      const post = posts.find((post) => post.id === this.id);

      this.editPostForm.patchValue({
        title: post?.title,
        description: post?.description,
      });
    });
  }

  onSubmit() {
    const postData: Post = { ...this.editPostForm.value, id: this.id } as Post;

    this.postsService.update(postData).subscribe((post) => {
      this.router.navigate(['/posts']);
    });
  }
}
