import { Component, inject, signal } from '@angular/core';
import { ConfigService } from '../services/config.service';
import { User } from '../models/user.model';
import { catchError, retry, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-error-handler',
  imports: [JsonPipe],
  templateUrl: './error-handler.component.html',
  styleUrl: './error-handler.component.sass'
})
export class ErrorHandlerComponent {
  private configService = inject(ConfigService)

  user = signal<User | undefined>(undefined)
  errorMessage = signal<string | null>(null)

  onFetch() {
    this.errorMessage.set(null)
    this.configService.getSingleUser().pipe(
      retry(3),
      catchError(this.handleError.bind(this))
    ).subscribe({
      next: (response) => {
        this.user.set(response.body)
      },
      error: (err) => {
        // this.errorMessage.set(err)
      }
    })
  }

  handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      this.errorMessage.set('Network error: Please check your internet connection')
    } else {
      this.errorMessage.set(`Error: ${error.message} (HTTP ${error.status})`)
    }
    
    return throwError(() => new Error('An Error occured'))
  }
}
