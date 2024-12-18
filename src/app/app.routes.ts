import { Routes } from '@angular/router';
import { TeamComponent } from './basics/team/team.component';
import { TeamGuard } from './services/canActivateTeam';

export const routes: Routes = [
  { path: 'team/:id', component: TeamComponent, canActivate: [TeamGuard] },
];
