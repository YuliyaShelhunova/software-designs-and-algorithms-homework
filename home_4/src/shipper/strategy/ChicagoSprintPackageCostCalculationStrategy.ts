import { BaseCostCalculationStrategy } from "./BaseCostCalculationStrategy";

export class ChicagoSprintPackageCostCalculationStrategy extends BaseCostCalculationStrategy {
  protected getCostPerOunce(): number {
    return 0.2;
  }
}
