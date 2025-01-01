import { Component } from '@angular/core';
import { EngineComponent } from "../engine/engine.component";
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-car',
  imports: [EngineComponent],
  templateUrl: './car.component.html',
  styleUrl: './car.component.scss',
  providers: [CarService]
})
export class CarComponent {

}
