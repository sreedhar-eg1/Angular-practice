import { Component, inject, OnInit } from '@angular/core';
import { GroceryService } from '../services/grocery.service';
import { Observable } from 'rxjs';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-grocery-list',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './grocery-list.component.html',
  styleUrl: './grocery-list.component.scss'
})
export class GroceryListComponent implements OnInit {
  private groceryService = inject(GroceryService)

  groceryListSignal = toSignal(this.groceryService.getGroceries())

  ngOnInit(): void {
  }
}
