import { Injectable } from '@angular/core';

import {Tile} from "../models/tile";
import {GameField} from "../models/game-field";
import {GameState} from "../models/game-state";

@Injectable()
export class GameStateService {
  field: GameField;
  state: GameState;
  
  constructor() {
    // 10 9*9
    // 40 16*16
    // 99 30*16
    this.field = new GameField(9, 9, 10);
    this.state = new GameState(this.field);
  }
  
  getState(): GameState {
    return this.state;
  }

  reveal(tile: Tile): void {
    if (tile.isMine) {
      // TODO: gameover
      this.state.isDefeat = true;
    } else {
      this.field.reveal(tile);
      this.state.isVictory = this.checkIsWin();
    }
  }

  checkIsWin() {
    return this.field.tiles.filter(tile => !tile.isRevealed && !tile.isMine).length === 0;
  }
}
