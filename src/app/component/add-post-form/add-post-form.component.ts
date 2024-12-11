import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CategoryDeclarativeService } from '../../services/declarative/category-declarative.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-add-post-form',
  imports: [ReactiveFormsModule, AsyncPipe],
  templateUrl: './add-post-form.component.html',
  styleUrl: './add-post-form.component.scss',
})
export class AddPostFormComponent {
  private declarativeCategoryService = inject(CategoryDeclarativeService)

  categories$ = this.declarativeCategoryService.categories$

  addForm = new FormGroup({
    title: new FormControl('', { validators: [Validators.required] }),
    description: new FormControl('', { validators: [Validators.required] }),
    categoryId: new FormControl('')
  });

  onAddPost() {
    if (this.addForm.invalid) {
      return;
    }

    console.log(this.addForm.value);
  }
}
