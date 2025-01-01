import { Injectable } from '@angular/core';
import { Car } from '../models/car.model';

@Injectable()
export class SportsCarService {

  constructor() { }

  getCar(): Car {
      return {name: 'Sports car', engine: 'V8 Engine'}
    }
}
