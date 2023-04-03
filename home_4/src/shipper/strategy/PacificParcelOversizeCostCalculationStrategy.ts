import { BaseCostCalculationStrategy } from "./BaseCostCalculationStrategy";

export class PacificParcelOversizeCostCalculationStrategy extends BaseCostCalculationStrategy {
  protected getCostPerOunce(): number {
    return 0.21;
  }
}
