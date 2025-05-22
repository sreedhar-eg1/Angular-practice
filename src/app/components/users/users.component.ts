import { Component, HostBinding } from '@angular/core';
import { routeAnimation } from '../../animation/routeAnimation';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
  animations: [routeAnimation]
})
export class UsersComponent {
@HostBinding('@routeAnimationTrigger') routeAnimation = true
}
