import {
  animate,
  group,
  keyframes,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  animations: [
    trigger('cardTrigger', [
      transition(':enter', [
        // style({ opacity: 0, transform: 'translateX(100%)' }),
        // animate(300),
        query(
          '.card-footer',
          style({
            opacity: 0,
          })
        ),
        group([
          query('.card-header', [
            style({
              opacity: 0,
              transform: 'translateY(-100%)',
            }),
            animate(300),
          ]),
          query('.card-body', [
            style({
              opacity: 0,
              transform: 'translateX(100%)',
            }),
            animate('400ms 200ms linear'),
          ]),
          query('.card-footer', [
            style({
              opacity: 0,
              transform: 'translateY(100%)',
            }),
            animate('500ms 400ms linear'),
          ]),
        ]),
      ]),
      transition(':leave', [
        animate(
          300,
          style({
            opacity: 0,
            transform: 'translateX(-100%)',
          })
        ),
      ]),
      transition('* => *', [
        query(':enter', [
          animate(800, keyframes([
            style({transform: 'scale(1.1)', offset: 0}),
            style({transform: 'scale(0.9)', offset: 0.4}),
            style({transform: 'scale(1.1)', offset: 0.6}),
            style({transform: 'scale(0.9)', offset: 0.8}),
            style({transform: 'scale(1)', offset: 1}),
          ]))
        ], {
          optional: true
        })
      ])
    ]),
  ],
})
export class CardComponent {
  showCard = signal(false);
  showPara = signal(false)
}
