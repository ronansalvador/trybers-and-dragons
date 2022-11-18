export default abstract class Race {
  private _name: string;
  private _dexterity: number;

  constructor(name:string, desxterity:number) {
    this._name = name;
    this._dexterity = desxterity;
  }

  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get maxLifePoints(): number;

  get name():string {
    return this._name;
  }

  get dexterity():number {
    return this._dexterity;
  }
}