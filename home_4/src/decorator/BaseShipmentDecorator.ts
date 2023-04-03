import { Shipment } from "../Shipment";

export abstract class BaseShipmentDecorator extends Shipment {
  private shipment: Shipment;

  constructor(shipment: Shipment) {
    super();
    this.shipment = shipment;
  }

  getShipmentId(): number {
    return this.shipment.getShipmentId();
  }

  get weight(): number {
    return this.shipment.weight;
  }

  get fromAddress(): string {
    return this.shipment.fromAddress;
  }

  get toAddress(): string {
    return this.shipment.toAddress;
  }

  get fromZipCode(): string {
    return this.shipment.fromZipCode;
  }

  get toZipCode(): string {
    return this.shipment.toZipCode;
  }

  ship(): string {
    return this.shipment.ship();
  }
}
