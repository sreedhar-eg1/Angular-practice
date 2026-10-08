import { inject, Service } from "@angular/core";
import { ILogger } from "../models/logger";
import { REPORTERS } from "../config/reporter.token";
import { Reporter } from "../models/reporter";

@Service()
export class ExperimentalLogger implements ILogger {
  prefix: string = "Root";

  private reports = inject<ReadonlyArray<Reporter>>(REPORTERS);

  //   @Service class cannot use constructor dependency injection. Use the `inject` function instead.
  //   So below dependency injection wont work
  //   constructor(@Inject(REPORTERS) private reports: ReadonlyArray<Reporter>) {}

  log(message: string) {
    this.reports.forEach(({ report }) => report());
    console.log(`${this.prefix} (experimental): ${message}`);
  }
}
