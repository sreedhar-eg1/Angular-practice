import { Directive, ElementRef, inject, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBackgroundColor]'
})
export class BackgroundColorDirective implements OnInit {
  private renderer = inject(Renderer2)
  private hostElememt = inject(ElementRef).nativeElement

  constructor() { }

  ngOnInit(): void {
      this.renderer.setStyle(this.hostElememt, 'backgroundColor', 'green')
      this.renderer.setStyle(this.hostElememt, 'padding', '1rem')
  }

}
