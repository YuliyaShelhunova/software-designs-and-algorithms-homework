import { Shipment } from "../../Shipment";
import { AbstractShipmentBuilderFactory } from "./AbstractShipmentBuilderFactory";
import { LetterBuilder } from "../LetterBuilder";
import { OversizeBuilder } from "../OversizeBuilder";
import { PackageBuilder } from "../PackageBuilder";
import { ShipmentBuilder } from "../ShipmentBuilder";

export class WeightBasedShippmentBuilderFactory extends AbstractShipmentBuilderFactory {
  private static LETTER_MAX_WEIGHT = 15;
  private static PACKAGE_MAX_WEIGHT = 160;
  private static factory: WeightBasedShippmentBuilderFactory;

  private constructor() {
    super();
  }

  static getInstance(): WeightBasedShippmentBuilderFactory {
    if (this.factory == null) {
      this.factory = new WeightBasedShippmentBuilderFactory();
    }

    return this.factory;
  }

  getShipmentBulder(weight: number): ShipmentBuilder<Shipment> {
    if (weight <= WeightBasedShippmentBuilderFactory.LETTER_MAX_WEIGHT) {
      return new LetterBuilder(weight);
    } else if (weight <= WeightBasedShippmentBuilderFactory.PACKAGE_MAX_WEIGHT) {
      return new PackageBuilder(weight);
    } else {
      return new OversizeBuilder(weight);
    }
  }
}
