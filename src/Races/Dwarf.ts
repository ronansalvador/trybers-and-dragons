import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints: number;
  private static _counter = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;

    Dwarf.increaseInstace();
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;    
  }

  static increaseInstace(): void {
    this._counter += 1;
  }

  static createdRacesInstances(): number {
    return this._counter;
  }
}