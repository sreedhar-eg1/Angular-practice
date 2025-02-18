import {
  provideHttpClient,
  withInterceptors,
  withRequestsMadeViaParent,
} from '@angular/common/http';
import { Routes } from '@angular/router';
import { loginInterceptor } from './components/login.interceptor';

export const routes: Routes = [
  {
    path: 'users',
    // To perform particular interceptor to particular route
    providers: [
      provideHttpClient(
        withInterceptors([loginInterceptor]),
        withRequestsMadeViaParent()
      ),
    ],
    loadComponent: () =>
      import('./components/users/users.component').then(
        (comp) => comp.UsersComponent
      ),
  },
];
