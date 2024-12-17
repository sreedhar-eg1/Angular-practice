import { Component, signal } from '@angular/core';
import { ReactionPicker } from './rating-picker/reaction-picker';
@Component({
  selector: 'app-root',
  imports: [ReactionPicker],
  template: `
    <reaction-picker [reactions]="reactions()" />

    <section class="buttons">
      <button
        class="primary"
        (click)="reactions.set(['😡', '😠', '😐', '😊', '😍'])"
        >More Reactions</button>

      <button
        class="secondary"
        (click)="reactions.set(['😠', '😐', '😊'])"
        >Less Reactions</button>
    </section>

    `
})
export class AppComponent {
  reactions = signal<string[]>(['😠', '😐', '😊']);
}
