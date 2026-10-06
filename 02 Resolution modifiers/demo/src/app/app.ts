import { Component, inject, Optional } from "@angular/core";
import { Logger } from "./logger";
import { Parent } from "./parent";
import { Child } from "./child";

@Component({
  selector: "app-root",
  imports: [Parent, Child],
  template: `<div appParent>
    <div appChild>Child</div>
  </div> `,
  styleUrls: ["./app.css"],
  providers: [Logger], // For self to work, we need to add this providers
})
export class App {
  title = "default";

  // With Optional
  // private logger = inject(Logger, { optional: true });

  // With Self
  private logger = inject(Logger, { self: true });

  // constructor(@Optional() private loggerService: Logger) {}
}
