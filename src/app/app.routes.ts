import { Routes } from '@angular/router';
import { CoursesComponent } from './components/courses/courses.component';
import { BasicsComponent } from './components/basics/basics.component';
import { UsersComponent } from './components/users/users.component';
import { AngularAnimationsComponent } from './components/angular-animations/angular-animations.component';
import { OpenCloseComponent } from './components/open-close/open-close.component';
import { AngularAnimationLayoutComponent } from './components/angular-animation-layout/angular-animation-layout.component';

export const routes: Routes = [
  { path: '', component: CoursesComponent, pathMatch: 'full' },
  { path: 'basic', component: BasicsComponent },
  { path: 'users', component: UsersComponent },
  {
    path: 'ang-animation',
    component: AngularAnimationLayoutComponent,
    children: [
      { path: '', component: AngularAnimationsComponent, pathMatch: 'full'  },
      { path: 'open', component: OpenCloseComponent },
    ],
  },
];
