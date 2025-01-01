import { Component, inject, Input, input, signal } from '@angular/core';
import { HeroTaxReturn } from '../../models/heroTaxReturn.model';
import { FormsModule } from '@angular/forms';
import { HeroTaxReturnService } from '../../services/hero-tax-return.service';

@Component({
  selector: 'app-hero-tax',
  imports: [FormsModule],
  templateUrl: './hero-tax.component.html',
  styleUrl: './hero-tax.component.scss',
  providers: [HeroTaxReturnService]
})
export class HeroTaxComponent {
  private heroTaxReturnService = inject(HeroTaxReturnService)

  // taxReturn = input<HeroTaxReturn>()
  @Input({required: true}) set taxReturn(htr: HeroTaxReturn) {
    this.heroTaxReturnService.taxReturn = htr
  }

  get taxReturn() {
    return this.heroTaxReturnService.taxReturn
  }

  taxAmount = signal(0)

  // get getTaxAmountFromSignal(): number {
  //   return this.taxReturn()?.taxAmount || 0
  // }

  onCancel() {
    this.heroTaxReturnService.restoreTaxReturn()
  }

  onSave() {
    this.heroTaxReturnService.saveTaxReturn()
  }
}
