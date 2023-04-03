import { CostCalculationStrategy } from "./CostCalculationStrategy";

export class AirEastOversizeCostCalculationStrategy implements CostCalculationStrategy {
  calculate(weight: number): number {
    return weight * 0.25 + 10;
  }
}
