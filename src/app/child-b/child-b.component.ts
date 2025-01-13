import { Component, inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-child-b',
  imports: [],
  templateUrl: './child-b.component.html',
  styleUrl: './child-b.component.scss',
})
export class ChildBComponent implements OnInit {
  // setting title from the component
  private title = inject(Title);

  ngOnInit(): void {
    this.title.setTitle('Componet B');
  }
}
