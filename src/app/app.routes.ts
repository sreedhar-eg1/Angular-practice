import { Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { GroceryListComponent } from './grocery-list/grocery-list.component';
import { EditGroceryitemComponent } from './edit-groceryitem/edit-groceryitem.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserComponent } from './user/user.component';
import { ErrorHandler, inject } from '@angular/core';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { HomeComponent } from './home/home.component';
import { ItemComponent } from './item/item.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './gaurds/auth.guard';
import { hasPermissionGuard } from './gaurds/has-permission.guard';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { userGuard } from './gaurds/user.guard';

// passing dynamic title using resolve function (promise resolve)
const resolveChildATitle = () => {
  return Promise.resolve('Child A Dynamic title');
};

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  // RelativeRoutes
  { path: 'home', component: HomeComponent },
  { path: 'home/item', component: ItemComponent },
  // Sending and Capturing the Dynamic Route Params
  { path: 'hero', component: HeroListComponent },
  { path: 'hero/:id', component: HeroDetailComponent },
  // CanActivate gaurd
  {path: 'dashboard', component: DashboardComponent, canActivate: [authGuard]},
  {path: 'login', component: LoginComponent},
  // canDeactivate
  {path: 'user-profile', component: UserProfileComponent, canDeactivate: [userGuard]},
  {
    path: 'first-component',
    component: FirstComponent,
    canActivateChild: [hasPermissionGuard],
    // passing title
    title: 'First Component',
    children: [
      {
        path: 'child-a',
        component: ChildAComponent,
        // title with the help of resolve promise
        title: resolveChildATitle,
      },
      {
        path: 'child-b',
        loadComponent: () =>
          import('../app/child-b/child-b.component').then(
            (comp) => comp.ChildBComponent
          ),
      },
    ],
  },
  { path: 'second-component', component: SecondComponent },
  { path: 'user/:userId', component: UserComponent },
  //   Dynamic redirect
  {
    path: 'old-user-page',
    redirectTo: ({ queryParams }) => {
      const errorHandler = inject(ErrorHandler);
      const userIdparams = queryParams['userId'];
      if (userIdparams) {
        return `user/${userIdparams}`;
      } else {
        errorHandler.handleError(
          new Error('Attempted navigation to user page without user ID')
        );
      }
      return 'not-found';
    },
  },
  // {path: 'groceries', component: GroceryListComponent},
  // {path: 'groceries/edit/:id', component: EditGroceryitemComponent}
  {
    path: 'groceries/:categoryId',
    component: GroceryListComponent,
    children: [{ path: 'details/:id', component: EditGroceryitemComponent }],
  },
  //   WildCard route
  { path: '**', component: PageNotFoundComponent },
];

// path: "" -> root of the application
// redirectTo -> redirect to the specified route
// pathMatch ->'full' => full url must match the empty string
