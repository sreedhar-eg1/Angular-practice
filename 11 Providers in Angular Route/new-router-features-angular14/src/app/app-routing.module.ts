import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeContainerComponent } from './feature/home/home-container/home-container.component';
import { UserLoaderService } from './feature/users/user-loader.service';
import { ExperimentalUserLoaderService } from './feature/users/experimental-user-loader.service';

const routes: Routes = [
  {
    path: '',
    component: HomeContainerComponent,
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./feature/users/users.module').then((m) => m.UsersModule),
  },
  {
    path: 'admin',
    providers: [
      {
        provide: UserLoaderService,
        useExisting: ExperimentalUserLoaderService,
      },
    ],
    loadComponent: () =>
      import('./feature/admin/admin.component').then((c) => c.AdminComponent),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
