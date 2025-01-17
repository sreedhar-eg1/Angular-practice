import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent implements OnInit{
  favoriteColor = new FormControl('')

  ngOnInit(): void {
      this.favoriteColor.valueChanges.subscribe({
        next: (color) => console.log(color)
      })
  }
}
