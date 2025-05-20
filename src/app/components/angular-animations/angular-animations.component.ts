import { Component, OnInit, signal } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { FormsModule } from '@angular/forms';
import { conditionalAnimation, keyAnimation, listAnimation } from '../../animation/conditionalAnimation';

@Component({
  selector: 'app-angular-animations',
  imports: [FormsModule],
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
      transition('default => clicked', animate('1s 200ms ease-in')),
    ]),
    trigger('numberState', [
      state(
        'unselected',
        style({
          border: '1px solid black',
          borderRadius: '4px',
          padding: '4px',
        })
      ),
      state(
        'selected',
        style({
          border: '1px solid red',
          borderRadius: '4px',
          padding: '4px',
          backgroundColor: 'pink',
        })
      ),
      transition('unselected <=> selected', [
        style({
          border: '1px solid black',
        }),
        animate('0.5s ease-in'),
      ]),
    ]),
    listAnimation,
    keyAnimation
  ],
})
export class AngularAnimationsComponent implements OnInit {
  clickAnimationInfo = signal('default');

  enteredNum = signal<number | null>(null);
  listData = signal<number[]>([])

  ngOnInit(): void {
    setTimeout(() => {
      this.clickAnimationInfo.set('clicked');
    }, 3000);
  }

  onInputChange(event: Event) {
    this.enteredNum.set(+(event.target as HTMLInputElement).value);
  }

  onAddElement() {
    this.listData().push(Math.random() * 100)
  }
}
