import {GameField} from "./game-field";

export class GameState {
  gameField: GameField;
  isVictory: boolean = false;
  isDefeat: boolean = false;
  
  constructor(gameField: GameField) {
    this.gameField = gameField;
  }
}
