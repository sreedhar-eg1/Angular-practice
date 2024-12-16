import { Component } from '@angular/core';

@Component({
  selector: 'app-styles',
  imports: [],
  templateUrl: './styles.component.html',
  styleUrl: './styles.component.scss'
})
export class StylesComponent {
  flexStyle = "display: flex; flex-direction: row"
  inlineStyle1 = "width: 200px; height: 200px; color: red"
  inlineStyle2 = {width: '200px', height: '200px', color: 'yellow'}

  onType(event: Event) {
    console.log(event)
  }
}
