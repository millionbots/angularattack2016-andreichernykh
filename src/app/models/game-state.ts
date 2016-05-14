import {GameField} from "./game-field";
import {Hero} from "./hero";

export class GameState {
  gameField: GameField;
  hero: Hero;
  
  constructor(gameField: GameField, hero: Hero) {
    this.gameField = gameField;
    this.hero = hero;
  }
}
