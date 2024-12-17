import {
  Directive,
  inject,
  input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appDynamicList]',
})
export class DynamicListDirective implements OnInit {
  private templateRef = inject(TemplateRef<any>);
  private viewContainerRef = inject(ViewContainerRef);

  appDynamicList = input<any[]>()
  otherUsers = input<any[] | undefined>()

  constructor() {}

  ngOnInit(): void {
    console.log(this.otherUsers());
    
      this.viewContainerRef.clear()
      for (const user of this.appDynamicList()!) {
        const context = {$user: user, $otherUsers: this.otherUsers(),}
        this.viewContainerRef.createEmbeddedView(this.templateRef, context)
      }
  }
}
