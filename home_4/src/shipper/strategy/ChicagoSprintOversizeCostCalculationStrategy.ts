import { BaseCostCalculationStrategy } from "./BaseCostCalculationStrategy";

export class ChicagoSprintOversizeCostCalculationStrategy extends BaseCostCalculationStrategy {
  protected getCostPerOunce(): number {
    return 0.2;
  }
}
