import { Shipment } from "./Shipment";

export class Letter extends Shipment {
  constructor(weight: number) {
    super(weight);
  }
}
