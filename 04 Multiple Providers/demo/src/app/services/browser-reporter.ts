import { Service } from "@angular/core";

import { Reporter } from "../models/reporter";

@Service()
export class BrowserReporter implements Reporter {

  report() {
    console.log(
      `Brower Report: Brower Width - ${window.outerWidth} Browser Height - ${window.outerHeight}`,
    );
  }
}
