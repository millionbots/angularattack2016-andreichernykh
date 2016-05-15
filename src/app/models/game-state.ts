import {GameField} from "./game-field";

export class GameState {
  gameField: GameField;
  isVictory: boolean = false;
  isDefeat: boolean = false;
  timeSpent: number = 0;
  startTime: number; // TODO: remove

  constructor(gameField: GameField) {
    this.gameField = gameField;
  }
}
