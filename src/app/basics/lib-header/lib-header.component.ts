import { Component, forwardRef } from '@angular/core';
import { LibHeaderToken } from '../../services/libHeader.token';
import { LibCardComponent } from '../lib-card/lib-card.component';

@Component({
  selector: 'app-lib-header',
  imports: [],
  templateUrl: './lib-header.component.html',
  styleUrl: './lib-header.component.scss',
  providers: [
    {
      provide: LibHeaderToken,
      useExisting: forwardRef(() => LibHeaderComponent)
    },
  ],
})
export class LibHeaderComponent extends LibHeaderToken {
  doSomething() {
    console.log('Done something using doSomething method');
  }
}
