import { Shipment } from "../../Shipment";
import { ShipmentBuilder } from "../ShipmentBuilder";

export abstract class AbstractShipmentBuilderFactory {
  abstract getShipmentBulder(weight: number): ShipmentBuilder<Shipment>;
}
