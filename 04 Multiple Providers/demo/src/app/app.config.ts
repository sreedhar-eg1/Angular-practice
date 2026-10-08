/*!
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */

import { ApplicationConfig } from "@angular/core";
import { REPORTERS } from "./config/reporter.token";
import { BrowserReporter } from "./services/browser-reporter";
import { EngagingReporter } from "./services/engaging-reporter";

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: REPORTERS, useExisting: BrowserReporter, multi: true },
    { provide: REPORTERS, useExisting: EngagingReporter, multi: true },
  ],
};
