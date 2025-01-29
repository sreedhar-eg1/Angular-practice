import { Component, inject } from '@angular/core';
import { ConfigService } from '../../services/config.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-post-list',
  imports: [AsyncPipe],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.sass'
})
export class PostListComponent {
  private configService = inject(ConfigService)

  posts$ = this.configService.getPosts()
}
