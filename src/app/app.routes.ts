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

// passing dynamic title using resolve function (promise resolve)
const resolveChildATitle = () => {
  return Promise.resolve('Child A Dynamic title');
};

export const routes: Routes = [
  { path: '', redirectTo: 'groceries/123', pathMatch: 'full' },
  // RelativeRoutes
  { path: 'home', component: HomeComponent },
  { path: 'home/item', component: ItemComponent },
  {
    path: 'first-component',
    component: FirstComponent,
    // passing title
    title: 'First Component',
    children: [
      {
        path: 'child-a',
        component: ChildAComponent,
        // title with the help of resolve promise
        title: resolveChildATitle,
      },
      { path: 'child-b', component: ChildBComponent },
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
