import { Consumable } from "./Consumable";

export class Pizza extends Consumable {
  readonly numberOfSlices: number;
  private numberOfEatenSlices: number = 0;

  constructor(value: number, weight: number, numberOfSlices: number, isSpoiled: boolean) {
    super("pizza", value, weight, isSpoiled);
    this.numberOfSlices = numberOfSlices;
    this.isConsumed = !numberOfSlices;
  }

  getNumberOfEatenSlices(): number {
    return this.numberOfEatenSlices;
  }

  use(): string {
    if (this.isConsumed) {
      return super.use();
    }
    if (this.numberOfSlices) {
      this.numberOfEatenSlices++;
      if (this.numberOfEatenSlices === this.numberOfSlices) {
        this.isConsumed = true;
      }
    }
    return "You consumed a slice of the pizza.";
  }
}
