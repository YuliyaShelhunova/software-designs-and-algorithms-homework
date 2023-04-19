export interface CostCalculationStrategy {
  calculate(weight: number): number;
}
