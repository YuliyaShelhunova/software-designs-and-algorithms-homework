import { Item } from "./Item";
import { ItemComparator } from "./ItemComparator";

export class Inventory implements ItemComparator {
  private items: Item[] = [];

  constructor() {}

  compare(first: Item, second: Item): number {
    throw new Error("Method not implemented.");
  }

  addItem(item: Item): void {
    this.items.push(item);
  }

  sort(): void;
  sort(comparator: ItemComparator): void;
  sort(comparator?: ItemComparator): void {
    if (comparator) {
      this.items.sort(comparator.compare);
    } else {
      this.items.sort((item1, item2) => item1.value - item2.value);
    }
  }

  toString(): string {
    return this.items.join(", ");
  }
}
