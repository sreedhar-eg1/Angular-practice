import { Directive, Host, inject } from '@angular/core';
import { Logger } from './logger';

@Directive({
  selector: '[appChild]',
})
export class Child {

  constructor(@Host() private logger: Logger) {
    this.logger.log('Child directive created');
  }
}
