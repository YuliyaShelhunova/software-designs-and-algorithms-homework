import { AirEastShipper } from "../AirEastShipper";
import { ChicagoSprintShipper } from "../ChicagoSprintShipper";
import { PacificParcelShipper } from "../PacificParcelShipper";
import { Shipment } from "../../Shipment";
import { Shipper } from "../Shipper";
import { AbstractShipperFactory } from "./AbstractShipperFactory";

export class ZipCodeBasedShipperFactory extends AbstractShipperFactory {
  private static factory: ZipCodeBasedShipperFactory;

  private constructor() {
    super();
  }

  static getInstance() {
    if (this.factory == null) {
      this.factory = new ZipCodeBasedShipperFactory();
    }
    return this.factory;
  }

  getShipper(shipment: Shipment): Shipper {
    const airEastCodes = ["1", "2", "3"];
    const chicagoSprintCodes = ["4", "5", "6"];
    const pacificParcelCodes = ["7", "8", "9"];

    if (airEastCodes.find((item) => shipment.fromZipCode.startsWith(item))) {
      return new AirEastShipper();
    }
    if (chicagoSprintCodes.find((item) => shipment.fromZipCode.startsWith(item))) {
      return new ChicagoSprintShipper();
    }
    if (pacificParcelCodes.find((item) => shipment.fromZipCode.startsWith(item))) {
      return new PacificParcelShipper();
    }

    return new AirEastShipper();
  }
}
