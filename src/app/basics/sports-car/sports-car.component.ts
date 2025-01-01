import { Component } from '@angular/core';
import { EngineComponent } from "../engine/engine.component";
import { SportsCarService } from '../../services/sports-car.service';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-sports-car',
  imports: [EngineComponent],
  templateUrl: './sports-car.component.html',
  styleUrl: './sports-car.component.scss',
  // providers: [SportsCarService]
  // Specializewd providers
  providers: [{provide: CarService, useClass: SportsCarService}]
})
export class SportsCarComponent {

}
