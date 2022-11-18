import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private _energy: EnergyType;
  private static _counter = 0;

  constructor(name: string) {
    super(name);

    this._energy = 'mana';
    Mage.increaseInstace();
  }

  get energyType(): EnergyType {
    return this._energy;
  }

  static increaseInstace(): void {
    this._counter += 1;
  }

  static createdArchetypeInstances(): number {
    return this._counter;
  }
}