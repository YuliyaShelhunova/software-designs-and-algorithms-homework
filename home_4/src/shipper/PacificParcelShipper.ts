import { Shipment } from "../Shipment";
import { Shipper } from "./Shipper";
import { PacificParcelCostCalculationStrategyFactory } from "./strategy/factory/PacificParcelCostCalculationStrategyFactory";

export class PacificParcelShipper extends Shipper {
  getCost(shipment: Shipment): number {
    return PacificParcelCostCalculationStrategyFactory.getInstance()
      .getCostCalculationStrategy(shipment)
      .calculate(shipment.weight);
  }
}
