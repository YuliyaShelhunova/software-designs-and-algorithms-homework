import { Letter } from "../Letter";
import { AbstractShipmentBuilder } from "./AbstractShipmentBuilder";

export class LetterBuilder extends AbstractShipmentBuilder<Letter> {
  protected reset(weight: number): void {
    this.shipment = new Letter(weight);
  }
}
