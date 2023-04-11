import { Item } from "./Item";

export abstract class Weapon extends Item {
  static MODIFIER_CHANGE_RATE: number = 0.05;
  private baseDurability: number;
  protected baseDamage: number;
  protected damageModifier: number = 0;
  protected durabilityModifier: number = 0;
  private isBroken: boolean = false;

  constructor(name: string, baseDamage: number, baseDurabitity: number, value: number, weight: number) {
    super(name, value, weight);
    this.baseDamage = baseDamage;
    this.baseDurability = baseDurabitity;
  }

  use(): string {
    if (this.isBroken) {
      return `You can't use the ${this.name}, it is broken.`;
    }
    this.baseDurability = this.getEffectiveDurability(-Weapon.MODIFIER_CHANGE_RATE);
    const additionalText = this.baseDurability === 0 ? `\nThe ${this.name} breaks.` : "";
    this.isBroken = true;
    return `You use the ${this.name}, dealing ${Weapon.MODIFIER_CHANGE_RATE} points of damage.${additionalText}`;
  }

  polish(): void {}

  toString(): string {
    return `${this.name} − Value: ${this.value.toFixed(2)}, Weight: ${this.weight.toFixed(
      2
    )}, Damage: ${this.getEffectiveDamage().toFixed(2)}, Durability: ${(this.getEffectiveDurability() * 100).toFixed(2)}%`;
  }

  getEffectiveDamage(): number {
    return this.baseDamage + this.damageModifier;
  }

  getEffectiveDurability(): number;
  getEffectiveDurability(durabilityModifier: number): number;
  getEffectiveDurability(durabilityModifier?: number): number {
    let effectiveDurability = this.baseDurability + (durabilityModifier || this.durabilityModifier);
    if (effectiveDurability <= 0) {
      effectiveDurability = 0;
    }
    return effectiveDurability;
  }
}
