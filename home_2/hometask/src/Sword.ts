import { Weapon } from "./Weapon";

export class Sword extends Weapon {
  constructor(baseDamage: number, baseDurabitity: number, value: number, weight: number) {
    super("sword", baseDamage, baseDurabitity, value, weight);
  }

  polish(): void {
    const fixedValue = 25 * Weapon.MODIFIER_CHANGE_RATE;
    const newDamageModifier = this.damageModifier + Weapon.MODIFIER_CHANGE_RATE;
    const newEffectiveDamage = this.getEffectiveDurability(newDamageModifier);
    if (newEffectiveDamage <= fixedValue) {
      this.damageModifier = newDamageModifier;
    }
  }
}
