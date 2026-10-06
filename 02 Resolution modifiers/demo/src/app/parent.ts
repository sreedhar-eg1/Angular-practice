import { Directive, inject } from '@angular/core';
import { Logger } from './logger';

@Directive({
  selector: '[appParent]',
  providers: [Logger]
})
export class Parent {
  private logger = inject(Logger, {
    optional: true,
    self: true
  })

  constructor() {
    this.logger?.log('Child directive created')
  }
}
