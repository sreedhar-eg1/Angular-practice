import { Component, inject, OnInit, signal } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  AnimationBuilder,
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
  private builder = inject(AnimationBuilder)
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

  onAnimate(element: HTMLElement) {
    const animation = this.builder.build([
      // style({backgroundColor: 'orange', width: '100px'}),
      animate('800ms', style({backgroundColor: 'orange', width: '300px'}))
    ])

    const player = animation.create(element)
    player.play()
  }
}
