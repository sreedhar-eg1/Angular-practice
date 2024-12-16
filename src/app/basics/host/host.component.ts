import {
  Component,
  ComponentRef,
  inject,
  InputSignal,
  OnInit,
  signal,
  viewChild,
  ViewContainerRef,
} from '@angular/core';
import { DynamicComponent } from '../dynamic/dynamic.component';

@Component({
  selector: 'app-host',
  imports: [],
  templateUrl: './host.component.html',
  styleUrl: './host.component.scss',
})
export class HostComponent implements OnInit {
  // private viewContainerRef = inject(ViewContainerRef)
  containerRef = viewChild<true, ViewContainerRef>('containerRef', { read: ViewContainerRef});
  // To send value and recieve value from dynamically created component
  container!: ComponentRef<DynamicComponent>

  ngOnInit(): void {
    // this.viewContainerRef.createComponent(DynamicComponent)

    //loaded on this component rendered
    this.containerRef()?.clear();
    this.containerRef()?.createComponent(DynamicComponent);
  }

  // loaded on click
  loadComponent() {
    this.containerRef()?.clear();

    // To send and recieve value
    this.container = this.containerRef()?.createComponent(DynamicComponent)!;
    console.log(this.container);
    
    this.container.setInput('message', 'Hi, i am from parent')
    this.container.instance.event.subscribe((message) => console.log(message))
    
  }

  // cleared component on click
  clearDynamicalyLoadedComponent() {
    this.containerRef()?.clear();
  }
}
