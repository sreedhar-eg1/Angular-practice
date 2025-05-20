import { Component, signal } from '@angular/core';
import { conditionalAnimation } from '../../animation/conditionalAnimation';

@Component({
  selector: 'app-void-animation',
  imports: [],
  templateUrl: './void-animation.component.html',
  styleUrl: './void-animation.component.scss',
  animations: [conditionalAnimation]
})
export class VoidAnimationComponent {
  show = signal(false);

  onToggle() {
    this.show.update((prevState) => !prevState);
  }
}
