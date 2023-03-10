import { Item } from "./Item";

export class Consumable extends Item {
  isConsumed: boolean;
  private isSpoiled: boolean;

  constructor(name: string, value: number, weight: number, isSpoiled: boolean) {
    super(name, value, weight);
    this.isSpoiled = isSpoiled;
    this.isConsumed = false;
  }

  use(): string {
    const additionalText = this.isSpoiled ? `\nYou feel sick.` : "";
    if (this.isConsumed) {
      return `There's nothing left of the ${this.name} to consume.`;
    }
    this.isConsumed = true;
    return `You consumed the ${this.name}.${additionalText}`;
  }
}
