import { BaseCostCalculationStrategy } from "./BaseCostCalculationStrategy";

export class PacificParcelLetterCostCalculationStrategy extends BaseCostCalculationStrategy {
  protected getCostPerOunce(): number {
    return 0.51;
  }
}
