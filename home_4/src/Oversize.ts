import { Shipment } from "./Shipment";

export class Oversize extends Shipment {
  constructor(weight: number) {
    super(weight);
  }
}
