import { Component, inject } from '@angular/core';
import { FlowerService } from '../../services/flower.service';
import { AnimalService } from '../../services/animal.service';

@Component({
  selector: 'app-di-provider-view-provider-inspector',
  imports: [],
  templateUrl: './di-provider-view-provider-inspector.component.html',
  styleUrl: './di-provider-view-provider-inspector.component.scss'
})
export class DiProviderViewProviderInspectorComponent {
  public flowerService = inject(FlowerService)
  public animalService = inject(AnimalService)
}
