import { NgClass, NgStyle } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-ng-style-comp',
  imports: [NgClass, NgStyle],
  templateUrl: './ng-style-comp.component.html',
  styleUrl: './ng-style-comp.component.scss',
})
export class NgStyleCompComponent {
  isActive = signal(true);
}
