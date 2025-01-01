export interface HeroTaxReturn {
  id: number;
  name: string;
  taxAmount: number;
  clone(): HeroTaxReturn
}
