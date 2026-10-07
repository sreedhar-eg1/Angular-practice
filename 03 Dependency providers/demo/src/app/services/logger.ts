import { Service } from "@angular/core";
import { ILogger } from "../models/logger";
import { ExperimentalLogger } from "./experimental-logger";

@Service()
export class Logger implements ILogger {
  prefix: string = "Root";

  log(message: string) {
    console.log(`${this.prefix}: ${message}`);
  }
}
