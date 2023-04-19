import { Shipment } from "../Shipment";

export abstract class Shipper {
  abstract getCost(shipment: Shipment): number;
}
