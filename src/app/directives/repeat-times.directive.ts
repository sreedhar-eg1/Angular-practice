import {
  Directive,
  inject,
  input,
  OnChanges,
  OnInit,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appRepeatTimes]',
})
export class RepeatTimesDirective implements OnInit, OnChanges {
  private templateRef = inject(TemplateRef<any>);
  private viewContainerRef = inject(ViewContainerRef);

  count = input<number>();

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    this.viewContainerRef.clear();
    for (let index = 0; index < this.count()!; index++) {
      this.viewContainerRef.createEmbeddedView(this.templateRef, {
        $index: index,
      });
    }
  }
}
