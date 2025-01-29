import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostListComponent } from "./components/post-list/post-list.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PostListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'angular-19-http';
}
