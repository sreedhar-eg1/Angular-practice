import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import {
  PreloadingStrategy,
  provideRouter,
  TitleStrategy,
  withComponentInputBinding,
  withRouterConfig,
} from '@angular/router';

import { routes } from './app.routes';
import { TemplatePageTitleStrategyService } from './services/template-page-title-strategy.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withRouterConfig({ paramsInheritanceStrategy: 'always' }),
      withComponentInputBinding(),
    ),
    {provide: TitleStrategy, useClass: TemplatePageTitleStrategyService}
  ],
};

// withComponentInputBinding() -> using this we can get params data using input decorator or signal
// withRouterConfig({paramsInheritanceStrategy: 'always'}) -> when you have parent component, which require some param data and also child component, in child component if you wanna access both parent as well as child params data then we need to use this config
// Custom title strategy to prefix anything to the title
