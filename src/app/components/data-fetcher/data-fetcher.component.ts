import { Component, inject, signal } from '@angular/core';
import { ConfigService } from '../../services/config.service';
import { Observable } from 'rxjs';
import { Post } from '../../models/post.model';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-data-fetcher',
  imports: [AsyncPipe, JsonPipe],
  templateUrl: './data-fetcher.component.html',
  styleUrl: './data-fetcher.component.sass'
})
export class DataFetcherComponent {
  private configService = inject(ConfigService)

  singlePost$!: Observable<Post>
  sampleText = signal<any>('')
  imageData = signal<any>('')

  onFetchJson() {
    this.singlePost$ = this.configService.getSinglePost()
  }

  onFetchText() {
    this.configService.getSampleTestFile().subscribe({
      next: (test) => {
        this.sampleText.set(test)
      }
    })
  }

  onFetchImage() {
    this.configService.getImage().subscribe({
      next: (imageRes) => {
        this.imageData.set(imageRes)
      }
    })
  }
}
