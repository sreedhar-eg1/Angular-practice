import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-open-close',
  imports: [],
  templateUrl: './open-close.component.html',
  styleUrl: './open-close.component.scss',
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'green'
      })),
      state('closed', style({
         height: '100px',
        opacity: 0.5,
        backgroundColor: 'red'
      })),
      transition("open => closed", animate("1s linear")),
      transition("closed => open", animate("2s linear")),

    ])
  ]
})
export class OpenCloseComponent {
  isOpen = signal(false);

  onToggle() {
    this.isOpen.update(prevState => !prevState)
  }
}
