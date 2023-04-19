import { Shipment } from "../../../Shipment";
import { Letter } from "../../../Letter";
import { Package } from "../../../Package";
import { Oversize } from "../../../Oversize";
import { CostCalculationStrategy } from "../CostCalculationStrategy";
import { ChicagoSprintLetterCostCalculationStrategy } from "../ChicagoSprintLetterCostCalculationStrategy";
import { ChicagoSprintPackageCostCalculationStrategy } from "../ChicagoSprintPackageCostCalculationStrategy";
import { ChicagoSprintOversizeCostCalculationStrategy } from "../ChicagoSprintOversizeCostCalculationStrategy";

export class ChicagoSprintCostCalculationStrategyFactory {
  private static factory: ChicagoSprintCostCalculationStrategyFactory;

  private map: Map<string, CostCalculationStrategy> = new Map();

  private constructor() {
    this.map.set(typeof Letter, new ChicagoSprintLetterCostCalculationStrategy());
    this.map.set(typeof Package, new ChicagoSprintPackageCostCalculationStrategy());
    this.map.set(typeof Oversize, new ChicagoSprintOversizeCostCalculationStrategy());
  }

  public static getInstance(): ChicagoSprintCostCalculationStrategyFactory {
    if (this.factory == null) {
      this.factory = new ChicagoSprintCostCalculationStrategyFactory();
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
