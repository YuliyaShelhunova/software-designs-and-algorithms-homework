import { Shipment } from "../../../Shipment";
import { Letter } from "../../../Letter";
import { Package } from "../../../Package";
import { Oversize } from "../../../Oversize";
import { CostCalculationStrategy } from "../CostCalculationStrategy";
import { PacificParcelLetterCostCalculationStrategy } from "../PacificParcelLetterCostCalculationStrategy";
import { PacificParcelPackageCostCalculationStrategy } from "../PacificParcelPackageCostCalculationStrategy";
import { PacificParcelOversizeCostCalculationStrategy } from "../PacificParcelOversizeCostCalculationStrategy";

export class PacificParcelCostCalculationStrategyFactory {
  private static factory: PacificParcelCostCalculationStrategyFactory;

  private map: Map<string, CostCalculationStrategy> = new Map();

  private constructor() {
    this.map.set(typeof Letter, new PacificParcelLetterCostCalculationStrategy());
    this.map.set(typeof Package, new PacificParcelPackageCostCalculationStrategy());
    this.map.set(typeof Oversize, new PacificParcelOversizeCostCalculationStrategy());
  }

  public static getInstance(): PacificParcelCostCalculationStrategyFactory {
    if (this.factory == null) {
      this.factory = new PacificParcelCostCalculationStrategyFactory();
    }
    return this.factory;
  }

  getCostCalculationStrategy(shipment: Shipment): CostCalculationStrategy {
    const strategy = this.map.get(typeof shipment);
    if (!strategy) {
      throw new Error("Unsupported shipment type");
    }
    return strategy;
  }
}
