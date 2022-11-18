import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(player1: Fighter, private _player2: Fighter) {
    super(player1);
  }

  fight(): number {
    while (this.player.lifePoints > 0 && this._player2.lifePoints > 0) {
      this.player.attack(this._player2);      
      this._player2.attack(this.player);
    }

    return super.fight();
  }
}