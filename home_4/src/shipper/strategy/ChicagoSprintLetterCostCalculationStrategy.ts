import { BaseCostCalculationStrategy } from "./BaseCostCalculationStrategy";

export class ChicagoSprintLetterCostCalculationStrategy extends BaseCostCalculationStrategy {
  protected getCostPerOunce(): number {
    return 0.42;
  }
}
