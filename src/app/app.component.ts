import {
  Component,
  ComponentRef,
  inject,
  TemplateRef,
  Type,
  viewChild,
  ViewContainerRef,
} from '@angular/core';
import { WidgetComponent } from './widget/widget.component';
import { NgComponentOutlet } from '@angular/common';
import { WeatherContentComponent } from './widget/weather-content.component';
@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <img class="logo" src="./logo.svg" alt="Decoded Frontend" />
    <h1 class="page-title">ngContentOutlet Demo</h1>

    <main id="content">
      <ng-template #contentTemplate>
        <app-weather-content />
      </ng-template>
      <ng-container
        [ngComponentOutlet]="component"
        [ngComponentOutletInputs]="{
          title: 'Weather',
          description: 'Currently on bangalore:'
        }"
        [ngComponentOutletContent]="projectContent"
      ></ng-container>
      <section class="toolbar">
        <button (click)="createComponent()" class="create">
          Create Component
        </button>
        <button (click)="destroyComponent()" class="destroy">
          Destroy Component
        </button>
      </section>
    </main>
  `,
  imports: [NgComponentOutlet, WeatherContentComponent],
})
export class AppComponent {
  vcr = inject(ViewContainerRef);

  protected component: Type<WidgetComponent> | null = null;

  content = viewChild<TemplateRef<unknown>>('contentTemplate');
  projectContent: Node[][] = []

  createComponent() {
    this.projectContent = [this.vcr.createEmbeddedView(this.content()!).rootNodes];
    this.component = WidgetComponent;
  }

  destroyComponent() {
    this.component = null;
  }

  /* 
    Alternative wy of creating dynamic component with the help of ngComponentOutlet

      * For this we need to import NgComponentOutlet directive

      * we can also set input property while using ngComponentOutlet
        which can be done with the help of another directive called ngComponentOutletInputs, which accepts an object

      * we can also project content while using ngComponentOutlet
        its similar to how we created dynamic component and projected content
        first we need to wrap it in ng-template, by which at first it will be not rendered, and we need to manually render it
        after embedView is created, we need to use ngComponentOutletContent directive
        ngComponentOutletContent accept DOMNodes, we can convert the view into such node with the help of rootNodes property from viewContainerRef

      * There are few limitaions with the use of ngComponentOutlet
        ngComponentOutlet can create only one instance of dynamic component
        Not possible to react to the output event

  */
}
