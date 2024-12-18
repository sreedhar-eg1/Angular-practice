import { Injectable, signal } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root',
})
export class MyServiceService {
  id = signal(Math.random());

  constructor(private loggerService: LoggerService) {}

  getId() {
    console.log(this.id());
  }
}
