import { Injectable } from '@angular/core';

@Injectable()
export class VillianService {
  private villans = ["Joker", "Thanos", "Knull", "Sand Man"]

  constructor() { }

  getVillans() {
    return this.villans
  }

  addVillan(villan: string) {
    this.villans.push(villan)
  }
}
