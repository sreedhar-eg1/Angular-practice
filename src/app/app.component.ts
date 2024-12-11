import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoadingComponent } from './component/loading/loading.component';
import { LoaderService } from './services/loader.service';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, LoadingComponent, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  title = 'rxjs-adv';
  private loaderService = inject(LoaderService);

  isLoading$!: Observable<boolean>
  loading = signal(false)

  ngOnInit(): void {
    this.isLoading$ = this.loaderService.loadingAction$;
    // this.isLoading$.subscribe((loading) => this.loading.set(loading))
      
  }


}
