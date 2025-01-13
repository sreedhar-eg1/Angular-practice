import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-first',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './first.component.html',
  styleUrl: './first.component.scss'
})
export class FirstComponent {

}
