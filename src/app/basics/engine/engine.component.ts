import { Component, inject, OnInit, signal } from '@angular/core';
import { CarService } from '../../services/car.service';
import { Car } from '../../models/car.model';

@Component({
  selector: 'app-engine',
  imports: [],
  templateUrl: './engine.component.html',
  styleUrl: './engine.component.scss'
})
export class EngineComponent implements OnInit {
  private carService = inject(CarService)
  car = signal<Car>({name: '', engine: ''})

  ngOnInit(): void {
      this.car.set(this.carService.getCar())
  }

}
