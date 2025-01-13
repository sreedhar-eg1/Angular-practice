import { Component, inject, OnInit } from '@angular/core';
import { GroceryService } from '../services/grocery.service';
import { Observable } from 'rxjs';
import { RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-grocery-list',
  imports: [RouterLink, AsyncPipe],
  templateUrl: './grocery-list.component.html',
  styleUrl: './grocery-list.component.scss'
})
export class GroceryListComponent implements OnInit {
  private groceryService = inject(GroceryService)

  groceryList$ = this.groceryService.getGroceries()

  ngOnInit(): void {
  }
}
