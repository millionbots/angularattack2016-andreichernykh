import {GameField} from "./game-field";
import {ScoreRecord} from "./score-record";

export class GameState {
  gameField: GameField;
  isVictory: boolean = false;
  isDefeat: boolean = false;
  gameTime: number = 0;
  scores: ScoreRecord[] = [];

  constructor(gameField: GameField) {
    this.gameField = gameField;
  }
}
