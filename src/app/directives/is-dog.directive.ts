import {
  Directive,
  inject,
  input,
  OnChanges,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { Animal, Dog, isDog } from '../models/animal.model';

@Directive({
  selector: '[appIsDog]',
})
export class IsDogDirective implements OnChanges {
  private templateRef = inject(TemplateRef<any>);
  private viewContainerRef = inject(ViewContainerRef);

  appIsDog = input<Animal>();

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (isDog(this.appIsDog()!)) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }

  static ngTemplateGuard__appIsDog(dir: IsDogDirective, state: Animal): state is Dog {
    return true
  }
}
