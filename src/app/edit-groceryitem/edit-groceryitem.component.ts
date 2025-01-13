import { Component, inject, input, Input, OnInit } from '@angular/core';
import { GroceryService } from '../services/grocery.service';
import { Observable, switchMap } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-edit-groceryitem',
  imports: [],
  templateUrl: './edit-groceryitem.component.html',
  styleUrl: './edit-groceryitem.component.scss',
})
export class EditGroceryitemComponent implements OnInit {
  categoryId = input();
  id = input<string>();

  grocery$!: Observable<any>;
  private groceryService = inject(GroceryService);

  grocerySignal = toSignal(toObservable(this.id).pipe(switchMap((id) => this.groceryService.getGroceryById(+id!))));

  // @Input() set id(groceryId: string) {
  //   this.grocery$ = this.groceryService.getGroceryById(+groceryId)
  // }

  ngOnInit(): void {
    console.log(this.categoryId());
    console.log(this.id());
  }
}
