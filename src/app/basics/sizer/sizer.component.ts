import { Component, model } from '@angular/core';

@Component({
  selector: 'app-sizer',
  imports: [],
  templateUrl: './sizer.component.html',
  styleUrl: './sizer.component.scss'
})
export class SizerComponent {
  size = model.required<number>()

  onIncrement() {
    this.size.set(this.size() + 1)
  }

  onDecrement() {
    this.size.set(this.size() - 1)
  }
}
