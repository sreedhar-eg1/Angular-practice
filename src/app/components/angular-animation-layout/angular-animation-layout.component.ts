import { Component, HostBinding } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { routeAnimation } from '../../animation/routeAnimation';

@Component({
  selector: 'app-angular-animation-layout',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './angular-animation-layout.component.html',
  styleUrl: './angular-animation-layout.component.scss',
  animations: [routeAnimation]
})
export class AngularAnimationLayoutComponent {
 @HostBinding('@routeAnimationTrigger') routeAnimation = true
}
