import { Shipment } from "../../Shipment";
import { Shipper } from "../Shipper";

export abstract class AbstractShipperFactory {
  abstract getShipper(shipment: Shipment): Shipper;
}
