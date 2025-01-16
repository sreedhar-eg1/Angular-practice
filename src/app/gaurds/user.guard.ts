import { CanDeactivateFn } from '@angular/router';
import { IcanDeactivate, UserProfileComponent } from '../user-profile/user-profile.component';

// export const userGuard: CanDeactivateFn<UserProfileComponent> = (component, currentRoute, currentState, nextState) => {
//   return !component.dirty() ? true : confirm('Are you sure to leave without submitting');
// };

export const userGuard: CanDeactivateFn<IcanDeactivate> = (component, currentRoute, currentState, nextState) => {
  return component.canDeactivate() ? true : confirm('Are you sure to leave without submitting');
};
