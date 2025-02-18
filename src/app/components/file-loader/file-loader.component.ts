import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ConfigService } from '../../services/config.service';
import { HttpEventType } from '@angular/common/http';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-file-loader',
  imports: [ReactiveFormsModule, NgStyle],
  templateUrl: './file-loader.component.html',
  styleUrl: './file-loader.component.sass',
})
export class FileLoaderComponent {
  private configService = inject(ConfigService)

  fileForm = new FormGroup({
    file: new FormControl(null),
  });

  selectedFile = signal<File | null>(null)

  progress = signal(-1)
  uploadComplete = signal(false)

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement
    
    if (input.files!.length > 0) {
      this.selectedFile.set(input.files![0])
    }
    
  }

  onSubmit() {
    if (!this.selectedFile()) {
      return
    }

    this.configService.uploadFileUsingLocalServer(this.selectedFile()!).subscribe({
      next: (event) => {
        switch (event.type) {
          case HttpEventType.UploadProgress:
            if (event.total) {
              console.log(event.loaded);
              console.log(event.total);
              this.progress.set(Math.round((event.loaded / event.total) * 100))
            }
            break
          case HttpEventType.Response:
            this.uploadComplete.set(true)
            this.progress.set(100)
            console.log(event.body);
            break
          default:
            break
        }
      }
    })
  }
}
