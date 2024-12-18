import { Directive, ElementRef, inject, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective implements OnInit {
  private renderer = inject(Renderer2)
  private hostElememt = inject(ElementRef).nativeElement

  constructor() { }

  ngOnInit(): void {
      this.renderer.setStyle(this.hostElememt, 'color', 'red')
      this.renderer.setStyle(this.hostElememt, 'border', '1px solid black')
      this.renderer.setStyle(this.hostElememt, 'padding', '1rem')
  }

}
