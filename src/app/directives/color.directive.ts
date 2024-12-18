import { Directive, ElementRef, inject, input, OnInit, output, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective implements OnInit {
  private renderer = inject(Renderer2)
  private hostElememt = inject(ElementRef).nativeElement

  color = input('red')
  colorChanged = output<string>()

  constructor() { }

  ngOnInit(): void {
      this.renderer.setStyle(this.hostElememt, 'color', this.color())
      this.renderer.setStyle(this.hostElememt, 'border', '1px solid black')
      this.renderer.setStyle(this.hostElememt, 'padding', '1rem')

      setTimeout(() => {
        this.colorChanged.emit(`'Color changed to ${this.color()}`)
      }, 1000)
  }

}
