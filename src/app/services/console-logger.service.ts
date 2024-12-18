import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConsoleLoggerService {
  constructor() {}
  log(message: string) {
    console.log('Console Service ' + message);
  }
}
