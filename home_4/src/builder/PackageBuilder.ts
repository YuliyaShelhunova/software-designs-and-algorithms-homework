import { Package } from "../Package";
import { AbstractShipmentBuilder } from "./AbstractShipmentBuilder";

export class PackageBuilder extends AbstractShipmentBuilder<Package> {
  protected reset(weight: number): void {
    this.shipment = new Package(weight);
  }
}
