import { Component } from '@angular/core';
import { ChildDefaultComponent } from "../child-default/child-default.component";
import { ChildPushComponent } from "../child-push/child-push.component";

@Component({
  selector: 'app-parent',
  imports: [ChildDefaultComponent, ChildPushComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {

}
