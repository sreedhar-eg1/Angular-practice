import { Component, inject } from '@angular/core';
import { FlowerService } from '../../services/flower.service';
import { AnimalService } from '../../services/animal.service';
import { DiProviderViewProviderInspectorComponent } from "../di-provider-view-provider-inspector/di-provider-view-provider-inspector.component";

@Component({
  selector: 'app-di-provider-view-provider-child',
  imports: [DiProviderViewProviderInspectorComponent],
  templateUrl: './di-provider-view-provider-child.component.html',
  styleUrl: './di-provider-view-provider-child.component.scss',
  providers: [{provide: FlowerService, useValue: {emoji: '🌻'}}],
  viewProviders: [{provide: AnimalService, useValue: {emoji: '🐶'}}]
})
export class DiProviderViewProviderChildComponent {
  public flowerService = inject(FlowerService)
  public animalService = inject(AnimalService)
}
