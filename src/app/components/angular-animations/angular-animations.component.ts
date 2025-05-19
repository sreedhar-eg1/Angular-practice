import { Component, OnInit, signal } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-angular-animations',
  imports: [],
  templateUrl: './angular-animations.component.html',
  styleUrl: './angular-animations.component.scss',
  animations: [
    trigger('clickedState', [
      state(
        'default',
        style({
          width: '100px',
          height: '100px',
          backgroundColor: 'orange',
        })
      ),
      state(
        'clicked',
        style({
          width: '200px',
          height: '100px',
          backgroundColor: 'pink',
        })
      ),
      transition("default => clicked", animate('1s 200ms ease-in'))
    ]),
  ],
})
export class AngularAnimationsComponent implements OnInit {
  clickAnimationInfo = signal('default');

  ngOnInit(): void {
    setTimeout(() => {
      this.clickAnimationInfo.set('clicked');
    }, 3000);
  }
}
