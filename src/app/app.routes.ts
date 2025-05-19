import { Routes } from '@angular/router';
import { CoursesComponent } from './components/courses/courses.component';
import { BasicsComponent } from './components/basics/basics.component';
import { UsersComponent } from './components/users/users.component';
import { AngularAnimationsComponent } from './components/angular-animations/angular-animations.component';

export const routes: Routes = [
  { path: '', component: CoursesComponent, pathMatch: 'full' },
  { path: 'basic', component: BasicsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'ang-animation', component: AngularAnimationsComponent },
];
