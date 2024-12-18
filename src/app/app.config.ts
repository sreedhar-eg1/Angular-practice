import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    // Default strategy where # is not included in the url http://localhost:4200/team 
    // {provide: LocationStrategy, useClass: PathLocationStrategy},
    // strategy where # is included in the url http://localhost:4200/#/team 
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
};
