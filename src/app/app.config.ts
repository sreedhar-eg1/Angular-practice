import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import {
  provideRouter,
  withComponentInputBinding,
  withRouterConfig,
} from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withRouterConfig({ paramsInheritanceStrategy: 'always' }),
      withComponentInputBinding()
    ),
  ],
};

// withComponentInputBinding() -> using this we can get params data using input decorator or signal
// withRouterConfig({paramsInheritanceStrategy: 'always'}) -> when you have parent component, which require some param data and also child component, in child component if you wanna access both parent as well as child params data then we need to use this config
