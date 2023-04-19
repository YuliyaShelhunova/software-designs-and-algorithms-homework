import { BaseShipmentDecorator } from "./BaseShipmentDecorator";

export class DoNotLeaveShipmentDecorator extends BaseShipmentDecorator {
  ship(): string {
    return super.ship() + "\n**MARK DO NOT LEAVE IF ADDRESS NOT AT HOME**";
  }
}
