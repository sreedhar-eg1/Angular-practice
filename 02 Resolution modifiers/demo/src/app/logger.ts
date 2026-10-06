import { Service } from "@angular/core";

@Service()
export class Logger {
  prefix: string = "Root";

  log(message: string) {
    console.log(`${this.prefix}: ${message}`);
  }
}
