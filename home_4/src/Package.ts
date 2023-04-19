import { Shipment } from "./Shipment";

export class Package extends Shipment {
  constructor(weight: number) {
    super(weight);
  }
}
