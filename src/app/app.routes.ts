import { Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { GroceryListComponent } from './grocery-list/grocery-list.component';
import { EditGroceryitemComponent } from './edit-groceryitem/edit-groceryitem.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserComponent } from './user/user.component';
import { ErrorHandler, inject } from '@angular/core';

export const routes: Routes = [
  { path: '', redirectTo: 'groceries/123', pathMatch: 'full' },
  { path: 'first-component', component: FirstComponent },
  { path: 'second-component', component: SecondComponent },
  { path: 'user/:userId', component: UserComponent },
  //   Dynamic redirect
  {
    path: 'old-user-page',
    redirectTo: ({queryParams}) => {
        const errorHandler = inject(ErrorHandler)
        const userIdparams = queryParams['userId']
        if (userIdparams) {
            return `user/${userIdparams}`
        } else {
            errorHandler.handleError(new Error('Attempted navigation to user page without user ID'))
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
