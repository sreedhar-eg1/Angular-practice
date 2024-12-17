import {
  Directive,
  inject,
  input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { DemoContext, DemoUrl } from '../models/demo.model';

@Directive({
  selector: '[appDemo]',
})
export class DemoDirective implements OnInit {
  private templateRef = inject(TemplateRef<DemoContext>);
  private viewContainerRef = inject(ViewContainerRef);

  appDemo = input.required<string>();
  appDemoUrl = input.required<DemoUrl>();

  constructor() {}

  ngOnInit(): void {
    const context = {
      $implicit: 1,
      demo: this.appDemo(),
      url: this.appDemoUrl(),
    };

    this.viewContainerRef.createEmbeddedView(this.templateRef, context);
  }

  static ngTemplateContextGuard(
    directive: DemoDirective,
    context: unknown
  ): context is DemoContext {
    return true;
  }
}
