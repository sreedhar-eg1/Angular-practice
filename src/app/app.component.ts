import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoadingComponent } from './component/loading/loading.component';
import { LoaderService } from './services/loader.service';
import { AsyncPipe } from '@angular/common';
import { Observable, tap } from 'rxjs';
import { NotificationService } from './services/notification.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, LoadingComponent, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  title = 'rxjs-adv';
  private loaderService = inject(LoaderService);
  private notificationService = inject(NotificationService);

  successMessage$ = this.notificationService.successMessageAction$.pipe(
    tap(() =>
      setTimeout(() => this.notificationService.clearSuccessMesssage(), 5000)
    )
  );
  errorMessage$ = this.notificationService.errorMessageAction$.pipe(
    tap(() =>
      setTimeout(() => this.notificationService.clearErrorMessage(), 5000)
    )
  );

  isLoading$!: Observable<boolean>;
  loading = signal(false);

  ngOnInit(): void {
    this.isLoading$ = this.loaderService.loadingAction$;
    // this.isLoading$.subscribe((loading) => this.loading.set(loading))
  }
}
