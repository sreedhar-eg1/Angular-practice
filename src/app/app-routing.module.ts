import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './services/auth.gaurd';
import { PostDetailComponent } from './posts/post-detail/post-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'counter',
    loadChildren: () =>
      import('./counter/counter.module').then((mod) => mod.CounterModule),
  },
  {
    path: 'posts',
    loadChildren: () =>
      import('./posts/posts.module').then((mod) => mod.PostsModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'posts/detail/:id',
    component: PostDetailComponent,
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.module').then((mod) => mod.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
