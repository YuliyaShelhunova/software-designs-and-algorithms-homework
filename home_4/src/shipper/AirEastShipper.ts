import { Shipment } from "../Shipment";
import { Shipper } from "./Shipper";
import { AirEastCostCalculationStrategyFactory } from "./strategy/factory/AirEastCostCalculationStrategyFactory";

export class AirEastShipper extends Shipper {
  getCost(shipment: Shipment): number {
    return AirEastCostCalculationStrategyFactory.getInstance()
      .getCostCalculationStrategy(shipment)
      .calculate(shipment.weight);
  }
}
