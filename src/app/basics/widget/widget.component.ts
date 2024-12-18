import { Component } from '@angular/core';
import { ColorDirective } from '../../directives/color.directive';
import { BackgroundColorDirective } from '../../directives/background-color.directive';

@Component({
  selector: 'app-widget',
  imports: [],
  templateUrl: './widget.component.html',
  styleUrl: './widget.component.scss',
  // without any input values
  // hostDirectives: [
  //   ColorDirective,
  //   BackgroundColorDirective
  // ]
  //With input values
  hostDirectives: [
    {
      directive: ColorDirective,
      inputs: ['color'],
      outputs: ['colorChanged']
    },
    BackgroundColorDirective
  ]
})
export class WidgetComponent {

}
