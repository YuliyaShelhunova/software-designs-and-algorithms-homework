import { BaseCostCalculationStrategy } from "./BaseCostCalculationStrategy";

export class AirEastLetterCostCalculationStategy extends BaseCostCalculationStrategy {
  protected getCostPerOunce(): number {
    return 0.39;
  }
}
