import { Comparable } from "./Comparable";

export abstract class Item implements Comparable<Item> {
  private readonly id: number = 1;
  static idCounter: number = 0;
  readonly name: string;
  value: number;
  weight: number;

  constructor(name: string, value: number, weight: number) {
    this.id = ++Item.idCounter;
    this.name = name;
    this.value = value;
    this.weight = weight;
  }

  compareTo(other: Item): number {
    if (this.value > other.value) {
      return 1;
    } else if (this.value === other.value && this.name.toLocaleLowerCase() === other.name.toLocaleLowerCase()) {
      return 0;
    } else {
      return -1;
    }
  }

  toString(): string {
    return `${this.name} − Value: ${this.value}.00, Weight: ${this.weight}.00`;
  }

  static resetIdCounter(): void {
    this.idCounter = 0;
  }

  getId(): number {
    return this.id;
  }

  abstract use(): void;
}
