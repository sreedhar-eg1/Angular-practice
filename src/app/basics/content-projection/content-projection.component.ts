import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-content-projection',
  imports: [],
  templateUrl: './content-projection.component.html',
  styleUrl: './content-projection.component.scss'
})
export class ContentProjectionComponent {
  hi = signal('hi')
}
