import { Shipment } from "../Shipment";
import { Shipper } from "./Shipper";
import { ChicagoSprintCostCalculationStrategyFactory } from "./strategy/factory/ChicagoSpringCostCalculationStrategyFactory";

export class ChicagoSprintShipper extends Shipper {
  getCost(shipment: Shipment): number {
    return ChicagoSprintCostCalculationStrategyFactory.getInstance()
      .getCostCalculationStrategy(shipment)
      .calculate(shipment.weight);
  }
}
