import { Component, inject, Input } from '@angular/core';
import { GroceryService } from '../services/grocery.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-edit-groceryitem',
  imports: [AsyncPipe],
  templateUrl: './edit-groceryitem.component.html',
  styleUrl: './edit-groceryitem.component.scss'
})
export class EditGroceryitemComponent {
  grocery$!: Observable<any>
  private groceryService = inject(GroceryService)

  @Input() set id(groceryId: string) {
    this.grocery$ = this.groceryService.getGroceryById(+groceryId)
  }
}
