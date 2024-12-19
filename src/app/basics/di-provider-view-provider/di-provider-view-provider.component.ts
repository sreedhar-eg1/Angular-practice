import { Component, inject } from '@angular/core';
import { FlowerService } from '../../services/flower.service';
import { DiProviderViewProviderChildComponent } from "../di-provider-view-provider-child/di-provider-view-provider-child.component";
import { AnimalService } from '../../services/animal.service';
import { DiProviderViewProviderInspectorComponent } from "../di-provider-view-provider-inspector/di-provider-view-provider-inspector.component";

@Component({
  selector: 'app-di-provider-view-provider',
  imports: [DiProviderViewProviderChildComponent, DiProviderViewProviderInspectorComponent],
  templateUrl: './di-provider-view-provider.component.html',
  styleUrl: './di-provider-view-provider.component.scss'
})
export class DiProviderViewProviderComponent {
  public flowerService = inject(FlowerService)
  public animalService = inject(AnimalService)
}
