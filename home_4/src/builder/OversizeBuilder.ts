import { Oversize } from "../Oversize";
import { AbstractShipmentBuilder } from "./AbstractShipmentBuilder";

export class OversizeBuilder extends AbstractShipmentBuilder<Oversize> {
  protected reset(weight: number): void {
    this.shipment = new Oversize(weight);
  }
}
