import { Component, Inject, inject, Optional } from "@angular/core";
import { Logger } from "./services/logger";
import { Parent } from "./parent";
import { Child } from "./child";
import { ExperimentalLogger } from "./services/experimental-logger";
import { LegacyLogger } from "./models/logger.legacy";
import { APP_CONFIG, AppConfig } from "./config/token";

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
      // useClass: ExperimentalLogger,
      // useExisting: ExperimentalLogger,
      // useValue: LegacyLogger,
      useFactory: (config: AppConfig) => {
        return config.experimentalEnabled
          ? new ExperimentalLogger()
          : new Logger();
      },
      deps: [APP_CONFIG],
    },
  ],
})
export class App {
  title = "default";

  // With Optional
  private logger = inject(Logger, { optional: true });
  private experimentalLogger = inject(ExperimentalLogger);

  // With Self
  // private logger = inject(Logger, { self: true });

  // constructor(@Optional() private loggerService: Logger) {}
  constructor(@Inject(APP_CONFIG) private appConfig: AppConfig) {}

  ngOnInit() {
    this.logger?.log("From app component");
    console.log(
      "is these two instance same:",
      this.logger === this.experimentalLogger,
    );
    console.log("Injected value: ", this.appConfig.experimentalEnabled);
  }
}
