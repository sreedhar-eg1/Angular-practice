import { Injectable } from '@angular/core';
import { HeroTaxReturn } from '../models/heroTaxReturn.model';

@Injectable()
export class HeroTaxReturnService {
  private originalTaxReturn!: HeroTaxReturn;
  private currentTaxReturn!: HeroTaxReturn;

  constructor() {}

  set taxReturn(htr: HeroTaxReturn) {
    // Now current and original have different
    this.originalTaxReturn = htr;
    this.currentTaxReturn = { ...htr };
  }

  get taxReturn(): HeroTaxReturn {
    return this.currentTaxReturn;
  }

  restoreTaxReturn() {
    this.currentTaxReturn = { ...this.originalTaxReturn };
  }

  saveTaxReturn() {
    this.originalTaxReturn = { ...this.currentTaxReturn };
  }
}
