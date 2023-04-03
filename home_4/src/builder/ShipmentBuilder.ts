import { Shipment } from "../Shipment";

export interface ShipmentBuilder<T extends Shipment> {
  setFromAddress(fromAddress: string): ShipmentBuilder<T>;

  setToAddress(toAddress: string): ShipmentBuilder<T>;

  setFromZipCode(fromZipCode: String): ShipmentBuilder<T>;

  setToZipCode(toZipCode: string): ShipmentBuilder<T>;

  build(): T;
}
