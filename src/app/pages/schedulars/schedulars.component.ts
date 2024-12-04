import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-schedulars',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './schedulars.component.html',
  styleUrl: './schedulars.component.scss'
})
export class SchedularsComponent {

}
