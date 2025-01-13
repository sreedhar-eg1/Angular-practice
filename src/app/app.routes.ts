import { Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { GroceryListComponent } from './grocery-list/grocery-list.component';
import { EditGroceryitemComponent } from './edit-groceryitem/edit-groceryitem.component';

export const routes: Routes = [
    {path: 'first-component', component: FirstComponent},
    {path: 'second-component', component: SecondComponent},
    {path: 'groceries', component: GroceryListComponent},
    {path: 'groceries/edit/:id', component: EditGroceryitemComponent}
];
