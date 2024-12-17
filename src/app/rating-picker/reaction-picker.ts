import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'reaction-picker',
  template: `
    <ul>
      @for (reaction of reactions(); track $index) {
        <li [class.selected]="isSelected(reaction)"
            (click)="selectedReaction.set(reaction)"
        >{{reaction}}</li>
      }
    </ul>
    <span>Selected: <b>{{selectedReaction() || 'Nothing'}}</b></span>
  `,
})
export class ReactionPicker {
  reactions = input<string[]>([]);

  selectedReaction = signal<string | null>(null);

  protected isSelected(reaction: string){
    return this.selectedReaction() === reaction;
  }
}
