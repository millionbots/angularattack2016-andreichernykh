import {GameField} from "./game-field";

export class GameState {
  gameField: GameField;
  
  constructor(gameField: GameField) {
    this.gameField = gameField;
  }
}
