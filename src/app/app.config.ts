import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withInterceptors,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { customHeaderInterceptor } from './components/custom-header.interceptor';
import { HeaderInterceptor } from './components/custom-di-based.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    // Function Based interceptor
    provideHttpClient(withInterceptors([customHeaderInterceptor])),
    // Old class based interceptor
    // provideHttpClient(withInterceptorsFromDi()),
    // { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true },
  ],
};
