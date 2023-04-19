import { WeightBasedShippmentBuilderFactory } from "./builder/factory/WeightBasedShippmentBuilderFactory";
import { FragileShipmentDecorator } from "./decorator/FragileShipmentDecorator";
import { DoNotLeaveShipmentDecorator } from "./decorator/DoNotLeaveShipmentDecorator";

export class Client {
  sendShippemnt() {
    const shipmentBuilder = WeightBasedShippmentBuilderFactory.getInstance().getShipmentBulder(150);
    const shipment = shipmentBuilder
      .setFromAddress("Malaga")
      .setToAddress("Minsk")
      .setFromZipCode("100000")
      .setToZipCode("200000")
      .build();

    const fragileShipment = new FragileShipmentDecorator(shipment);
    const doNotLeaveShipment = new DoNotLeaveShipmentDecorator(fragileShipment);
    doNotLeaveShipment.ship();
  }
}
