import {
  Component,
  computed,
  input,
  linkedSignal,
  signal,
} from '@angular/core';

@Component({
  selector: 'reaction-picker',
  template: `
    <ul>
      @for (reaction of reactions(); track $index) {
      <li
        [class.selected]="isSelected(reaction)"
        (click)="selectedReaction.set(reaction)"
      >
        {{ reaction }}
      </li>
      }
    </ul>
    <span
      >Selected: <b>{{ selectedReaction() || 'Nothing' }}</b></span
    >
  `,
})
export class ReactionPicker {
  reactions = input<string[]>([]);

  // linked signal without configuration
  // selectedReaction = linkedSignal(() => {
  //   return this.reactions().at(-1)
  // })

  // linked signal with configuration
  selectedReaction = linkedSignal<string[], string | null>({
    source: () => this.reactions(),
    computation: (source, previous) => {
      return source.find(r => previous?.value === r) || null;
    }
  });

  protected isSelected(reaction: string) {
    return this.selectedReaction() === reaction;
  }

  /*
      * linked signal is a new feature which is under developer preview, not ready for production

      * Its like computed signal, which re run when the signal defined inside it changes

      * but computed signal are readable signal, we cannot write anything. in this case where linkedsignal come into play

      * linked signal are same as computed signal, where we can write anything, and also read. and also we can get previous value

      * linked signal can be configured
        we can pass object with source and computation key
        source -> the signal that will change
        computaion -> can get the source and previous value

      * when we pass generic types to linked signal, we need to pass two type, one for source and other for computation
  */
}
