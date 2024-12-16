import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-dynamic',
  imports: [],
  templateUrl: './dynamic.component.html',
  styleUrl: './dynamic.component.scss'
})
export class DynamicComponent {
  message = input<string>('Default message')
  event = output<string>()

  sendEvent() {
    this.event.emit('Event sent')
  }
}
