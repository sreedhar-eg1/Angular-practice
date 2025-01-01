import { Injectable } from '@angular/core';
import { Car } from '../models/car.model';

@Injectable()
export class CarService {

  constructor() { }

  getCar(): Car {
    return {name: 'Generic car', engine: 'V4 Engine'}
  }
}
