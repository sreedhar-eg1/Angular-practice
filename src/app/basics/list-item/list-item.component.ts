import { Component, forwardRef } from '@angular/core';
import { ListComponent } from "../list/list.component";

@Component({
  selector: 'app-list-item',
  imports: [forwardRef(() => ListComponent)],
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.scss'
})
export class ListItemComponent {

}
