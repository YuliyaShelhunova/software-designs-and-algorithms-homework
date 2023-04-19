import { Shipment } from "../../../Shipment";
import { Letter } from "../../../Letter";
import { Package } from "../../../Package";
import { Oversize } from "../../../Oversize";
import { AirEastLetterCostCalculationStategy } from "../AirEastLetterCostCalculationStrategy";
import { CostCalculationStrategy } from "../CostCalculationStrategy";
import { AirEastPackageCostCalculationStategy } from "../AirEastPackageCostCalculationStrategy";
import { AirEastOversizeCostCalculationStrategy } from "../AirEastOversizeCostCalculationStrategy";

export class AirEastCostCalculationStrategyFactory {
  private static factory: AirEastCostCalculationStrategyFactory;

  private map: Map<string, CostCalculationStrategy> = new Map();

  private constructor() {
    this.map.set(typeof Letter, new AirEastLetterCostCalculationStategy());
    this.map.set(typeof Package, new AirEastPackageCostCalculationStategy());
    this.map.set(typeof Oversize, new AirEastOversizeCostCalculationStrategy());
  }

  public static getInstance(): AirEastCostCalculationStrategyFactory {
    if (this.factory == null) {
      this.factory = new AirEastCostCalculationStrategyFactory();
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
