import { BaseShipmentDecorator } from "./BaseShipmentDecorator";

export class FragileShipmentDecorator extends BaseShipmentDecorator {
  ship(): string {
    return super.ship() + "\n**MARK FRAGILE**";
  }
}
