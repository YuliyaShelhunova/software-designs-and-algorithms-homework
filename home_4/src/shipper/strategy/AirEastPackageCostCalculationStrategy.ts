import { BaseCostCalculationStrategy } from "./BaseCostCalculationStrategy";

export class AirEastPackageCostCalculationStategy extends BaseCostCalculationStrategy {
  protected getCostPerOunce(): number {
    return 0.25;
  }
}
