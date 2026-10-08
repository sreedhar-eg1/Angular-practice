import { Service } from '@angular/core';
import { ILogger } from '../models/logger';

@Service()
export class ExperimentalLogger implements ILogger {
    prefix: string = 'Root';

    log(message: string) {
         console.log(`${this.prefix} (experimental): ${message}`);
    };
}
