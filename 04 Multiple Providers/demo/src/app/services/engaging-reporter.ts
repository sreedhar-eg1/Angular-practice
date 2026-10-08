import { Service } from "@angular/core";
import { Reporter } from "../models/reporter";

@Service()
export class EngagingReporter implements Reporter {
  report() {
    console.log(`Engaging Report: User has been using this app for 10 sec.`);
  }
}
