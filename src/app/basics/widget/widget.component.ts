import { Component } from '@angular/core';
import { ColorDirective } from '../../directives/color.directive';
import { BackgroundColorDirective } from '../../directives/background-color.directive';

@Component({
  selector: 'app-widget',
  imports: [],
  templateUrl: './widget.component.html',
  styleUrl: './widget.component.scss',
  hostDirectives: [
    ColorDirective,
    BackgroundColorDirective
  ]
})
export class WidgetComponent {

}
