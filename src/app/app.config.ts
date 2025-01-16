import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import {
  PreloadingStrategy,
  provideRouter,
  TitleStrategy,
  withComponentInputBinding,
  withHashLocation,
  withRouterConfig,
} from '@angular/router';

import { routes } from './app.routes';
import { TemplatePageTitleStrategyService } from './services/template-page-title-strategy.service';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(),
    provideRouter(
      routes,
      withRouterConfig({ paramsInheritanceStrategy: 'always' }),
      withComponentInputBinding(),
      // withHashLocation()
    ),
    {provide: TitleStrategy, useClass: TemplatePageTitleStrategyService}
  ],
};

// withComponentInputBinding() -> using this we can get params data using input decorator or signal
// withRouterConfig({paramsInheritanceStrategy: 'always'}) -> when you have parent component, which require some param data and also child component, in child component if you wanna access both parent as well as child params data then we need to use this config
// Custom title strategy to prefix anything to the title
// withHashLocation() -> here if we want to prepend # -. supported for older browser
