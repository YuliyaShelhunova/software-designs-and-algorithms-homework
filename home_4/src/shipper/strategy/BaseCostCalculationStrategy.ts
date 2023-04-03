import { CostCalculationStrategy } from "./CostCalculationStrategy";

export abstract class BaseCostCalculationStrategy implements CostCalculationStrategy {
  calculate(weight: number): number {
    return weight * this.getCostPerOunce();
  }

  protected abstract getCostPerOunce(): number;
}
