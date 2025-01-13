import { Injectable, signal } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroceryService {
  private groceries = signal([
    {id: 1, name: 'Apples'},
    {id: 2, name: 'Bananas'},
    {id: 3, name: 'Oranges'},
    {id: 4, name: 'Promoganate'}
  ])

  getGroceryById(id: number) {
    const grocery = this.groceries().find((grocery) => grocery.id === id)
    return of(grocery)
  }

  getGroceries() {
    return of(this.groceries())
  }

  constructor() { }
}
