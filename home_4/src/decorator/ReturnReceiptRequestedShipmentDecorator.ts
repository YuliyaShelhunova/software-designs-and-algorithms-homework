import { BaseShipmentDecorator } from "./BaseShipmentDecorator";

export class ReturnReceiptRequestedShipmentDecorator extends BaseShipmentDecorator {
  ship(): string {
    return super.ship() + "\n**MARK RETURN RECEIPT REQUESTED**";
  }
}
