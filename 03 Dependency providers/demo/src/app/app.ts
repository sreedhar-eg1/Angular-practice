import { Component, inject, Optional } from "@angular/core";
import { Logger } from "./services/logger";
import { Parent } from "./parent";
import { Child } from "./child";
import { ExperimentalLogger } from "./services/experimental-logger";

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
      useClass: ExperimentalLogger,
    },
  ],
})
export class App {
  title = "default";

  // With Optional
  private logger = inject(Logger, { optional: true });

  // With Self
  // private logger = inject(Logger, { self: true });

  // constructor(@Optional() private loggerService: Logger) {}

  ngOnInit() {
    this.logger?.log("From app component");
  }
}
