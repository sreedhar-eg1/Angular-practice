import { Injectable } from '@angular/core';
import { Logger } from '../models/logger.model';

@Injectable({
  providedIn: 'root',
})
export class LoggerService implements Logger {
  constructor() {}

  log(message: string) {
    console.log('LoggerService ' +message);
  }
}
