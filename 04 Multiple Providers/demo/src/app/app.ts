import { Component, Inject, inject, Injector, Optional } from "@angular/core";
import { Logger } from "./services/logger";
import { Parent } from "./parent";
import { Child } from "./child";
import { ExperimentalLogger } from "./services/experimental-logger";
import { LegacyLogger } from "./models/logger.legacy";
import { APP_CONFIG, AppConfig } from "./config/token";

function loggerFactory(
  injector: Injector,
): ExperimentalLogger | typeof LegacyLogger {
  return injector.get(APP_CONFIG).experimentalEnabled
    ? injector.get(ExperimentalLogger)
    : LegacyLogger;
}

@Component({
  selector: "app-root",
  imports: [Parent, Child],
  template: `<div appParent>
    <div appChild>Child</div>
  </div> `,
  styleUrls: ["./app.css"],
  providers: [
    {
      provide: Logger,
      useFactory: loggerFactory,
      deps: [Injector],
      // multi: true,
    },
    // {
    //   provide: Logger,
    //   useValue: LegacyLogger,
    //   multi: true,
    // },
  ],
})
export class App {
  title = "default";

  private logger = inject(Logger, { optional: true });
  private experimentalLogger = inject(ExperimentalLogger);

  constructor(@Inject(APP_CONFIG) private appConfig: AppConfig) {}

  ngOnInit() {
    console.log(this.logger);
    this.logger?.log("From app component");
    console.log("Injected value: ", this.appConfig.experimentalEnabled);
  }
}
