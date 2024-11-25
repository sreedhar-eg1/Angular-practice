import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostDataService } from './posts/posts.dataservice';
import { EntityDataService } from '@ngrx/data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [PostDataService],
})
export class AppComponent {
  title = 'ngrx-data';

  constructor(
    entityDataService: EntityDataService,
    postDataService: PostDataService
  ) {
    entityDataService.registerService('Post', postDataService);
  }
}
