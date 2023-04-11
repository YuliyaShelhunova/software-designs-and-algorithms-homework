import { Weapon } from "./Weapon";

export class Bow extends Weapon {
  constructor(baseDamage: number, baseDurabitity: number, value: number, weight: number) {
    super("bow", baseDamage, baseDurabitity, value, weight);
  }

  polish(): void {
    const newDurabilityModifier = this.durabilityModifier + Weapon.MODIFIER_CHANGE_RATE;
    const newEffectiveDurability = this.getEffectiveDurability(newDurabilityModifier);
    if (newEffectiveDurability <= 1) {
      this.durabilityModifier = newDurabilityModifier;
    }
  }
}
