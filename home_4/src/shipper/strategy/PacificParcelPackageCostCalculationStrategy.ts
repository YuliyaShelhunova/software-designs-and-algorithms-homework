import { BaseCostCalculationStrategy } from "./BaseCostCalculationStrategy";

export class PacificParcelPackageCostCalculationStrategy extends BaseCostCalculationStrategy {
  protected getCostPerOunce(): number {
    return 0.19;
  }
}
