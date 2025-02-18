import { Component, inject, OnInit, signal } from '@angular/core';
import { Post } from '../../models/post.model';
import { ConfigService } from '../../services/config.service';
import { User } from '../../models/user.model';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-users',
  imports: [JsonPipe],
  templateUrl: './users.component.html',
  styleUrl: './users.component.sass',
})
export class UsersComponent implements OnInit {
  private configService = inject(ConfigService);

  user = signal<User | undefined>(undefined);

  ngOnInit(): void {
    this.configService.getSingleUser().subscribe({
      next: (post) => {
        this.user.set(post);
      },
    });
  }
}
