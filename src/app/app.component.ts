import {
  Component,
  ComponentRef,
  ElementRef,
  inject,
  TemplateRef,
  viewChild,
  ViewContainerRef,
} from "@angular/core";
import { WidgetComponent } from "./widget/widget.component";
import { WeatherContentComponent } from "./widget/weather-content.component";
@Component({
  selector: "app-root",
  standalone: true,
  template: `
    <img class="logo" src="./logo.svg" alt="Decoded Frontend" />
    <h1 class="page-title">Dynamic Components</h1>

    <main id="content">
      <ng-template #content>
        <app-weather-content />
      </ng-template>
      <ng-container #container></ng-container>
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
  imports: [WeatherContentComponent],
})
export class AppComponent {
  // without specifying our own view
  // vcr = inject(ViewContainerRef);

  // specifying our own view in the template
  vcr = viewChild("container", { read: ViewContainerRef });
  // content = viewChild(WeatherContentComponent, {
  //   read: ElementRef,
  // });
  content = viewChild<TemplateRef<unknown>>('content')

  // componentRef
  #componentRef?: ComponentRef<WidgetComponent>;

  createComponent() {
    const component = WidgetComponent;

    // default view
    // this.vcr.createComponent(component);

    // with the help of viewChild which return signal
    this.vcr()?.clear();

    // content projection while the component is created
    // this.#componentRef = this.vcr()?.createComponent(component, {
    //   projectableNodes: [[this.content()?.nativeElement]],
    // });

    // creating a view using createEmbededView for the content wrapped in ng-template
    const contentView = this.vcr()?.createEmbeddedView(this.content()!)
    this.#componentRef = this.vcr()?.createComponent(component, {
      projectableNodes: [
       contentView?.rootNodes!
      ]
    })

    // to set input decorator using componentRef
    this.#componentRef?.setInput("title", "Weather");
    this.#componentRef?.setInput("description", "Currently in Bangalore:");

    // handling output decorator
    this.#componentRef?.instance.closed.subscribe(() =>
      this.#componentRef?.destroy()
    );
  }

  destroyComponent() {
    // this.vcr.clear();

    // destroy with the help of componentRef
    this.#componentRef?.destroy();

    // will destroy every view instance
    this.vcr()!.clear();

    // to remove particular view instance, when we created multiple component with the help of remove method
    // this.vcr()?.remove(1)
  }

  /* 
    * when the component is created with the help of viewContainerRef, 
      then that component will be added to sibling of the current componet where the component has been dynamically added
        <app-root /> is the componet where the dynamic component is added
        <app-widget /> dynamic component added will be sibling to the app-root componet

    * we can exp;icitly specify the location, such that in that location component will be created
      for that we need to create our own view container, other wise the default view will be the sibling of the current componet where dynamic component is added

    * when multiple component is created, the previous component instance is not destroyed
      we can make use of componentRef to destroy
      
    * we can set input value with the help of setInput() method present in componentRef

    * we can handle output decorator with the help of instance property in the componentRef
      if we are using signal based output, i.e output() then we dont need to unsubscribe, angular will unsubscribe

    * we can also project content when component are created dynamically: <ng-content>
      content should be projected during component is created
      which can be done by passing additional information in the second parameter
      with the help of projectableNodes key, where the value is of type Node[][], where each Node can be HTML type
      here Node can be a component also

    * rootNode is a array of node, so we dont need to wrap it in a array

  */
}
