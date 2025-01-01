import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  contentChild,
} from '@angular/core';
import { LibHeaderComponent } from '../lib-header/lib-header.component';
import { LibHeaderToken } from '../../services/libHeader.token';

@Component({
  selector: 'app-lib-card',
  imports: [],
  templateUrl: './lib-card.component.html',
  styleUrl: './lib-card.component.scss',
})
export class LibCardComponent implements AfterViewInit, AfterContentInit {
  // With this, this will include in the final bundle
  // libHeader = contentChild(LibHeaderComponent)

  // libHeader = contentChild<LibHeaderToken | null>(LibHeaderToken);
  @ContentChild(LibHeaderToken) libHeader: LibHeaderToken | null = null

  ngAfterViewInit(): void {
    // if (this.libHeader()) {
    //   console.log(this.libHeader()?.doSomething());
    // }
  }

  ngAfterContentInit(): void {
    // console.log(this.libHeader());
    // if (this.libHeader()) {
    //   console.log(this.libHeader()?.doSomething());
    // }

    console.log(this.libHeader);
    if (this.libHeader) {
      console.log(this.libHeader?.doSomething());
    }
  }
}
