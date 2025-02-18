import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostListComponent } from "./components/post-list/post-list.component";
import { ConfigService } from './services/config.service';
import { Post } from './models/post.model';
import { JsonPipe } from '@angular/common';
import { DataFetcherComponent } from "./components/data-fetcher/data-fetcher.component";
import { FileLoaderComponent } from "./components/file-loader/file-loader.component";
import { ErrorHandlerComponent } from "./error-handler/error-handler.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PostListComponent, JsonPipe, DataFetcherComponent, FileLoaderComponent, ErrorHandlerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'angular-19-http';
  private configService = inject(ConfigService)

  post = signal<Post| undefined>(undefined)

  onFetch() {
    this.configService.getSinglePost().subscribe({
      next: (post) => {
        this.post.set(post)
      }
    })
  }
}
