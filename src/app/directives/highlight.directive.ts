import { Directive, ElementRef, HostListener, inject, input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnInit {
  private el = inject(ElementRef);

  appHighlight = input<string>()
  defaultColor = input<string>('orange')

  constructor() {
  }

  ngOnInit(): void {
    this.el.nativeElement.style.backgroundColor = this.defaultColor()
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(this.appHighlight()!);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
