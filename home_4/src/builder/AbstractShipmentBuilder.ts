import { Shipment } from "../Shipment";
import { ShipmentBuilder } from "./ShipmentBuilder";

export abstract class AbstractShipmentBuilder<T extends Shipment> implements ShipmentBuilder<T> {
  protected shipment: T;

  constructor(weight: number) {
    this.reset(weight);
  }

  protected abstract reset(weight: number): void;

  setFromAddress(fromAddress: string): ShipmentBuilder<T> {
    this.shipment.fromAddress = fromAddress;
    return this;
  }

  setToAddress(toAddress: string): ShipmentBuilder<T> {
    this.shipment.toAddress = toAddress;
    return this;
  }

  setFromZipCode(fromZipCode: string): ShipmentBuilder<T> {
    this.shipment.fromZipCode = fromZipCode;
    return this;
  }

  setToZipCode(toZipCode: string): ShipmentBuilder<T> {
    this.shipment.toZipCode = toZipCode;
    return this;
  }

  build(): T {
    const result = this.shipment;
    this.reset(result.weight);
    return result;
  }
}
