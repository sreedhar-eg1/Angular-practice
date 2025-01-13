import { Component, contentChild, contentChildren, effect, ElementRef } from '@angular/core';
import { ContentProjectionComponent } from '../content-projection/content-projection.component';

@Component({
  selector: 'app-content',
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {
  header = contentChild<ElementRef>('h5', {descendants: true})
  allHeader = contentChildren<ElementRef>('h5')
  contentComponent = contentChild(ContentProjectionComponent)

  contentSignal = effect(() => {
    console.log(this.header())
    console.log(this.allHeader())
    console.log(this.contentComponent())
  })
}
