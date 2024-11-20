import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store/app.state';
import { getErrorMessage, getLoading } from './store/shared/shared.selector';
import { Observable } from 'rxjs';
import { autoLogin } from './auth/state/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'ngrx-practice';

  showLoader$!: Observable<boolean>
  showErrorMessage$!: Observable<string>

  private store = inject(Store<AppState>)

  ngOnInit(): void {
      this.showLoader$ = this.store.select(getLoading)
      this.showErrorMessage$ = this.store.select(getErrorMessage)

      this.store.dispatch(autoLogin())
  }
}
