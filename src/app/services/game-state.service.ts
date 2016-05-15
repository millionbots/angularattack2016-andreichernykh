import { Injectable } from '@angular/core';

import {Tile} from "../models/tile";
import {GameField} from "../models/game-field";
import {GameState} from "../models/game-state";
import {ScoreRecord} from "../models/score-record";
import {GameSettings} from "../models/game-settings";

@Injectable()
export class GameStateService {
  state: GameState;
  scores: ScoreRecord[] = [];
  gameModes: GameSettings[] = [];
  gameSettings: GameSettings;
  
  constructor() {
    this.gameModes.push(new GameSettings(9, 9, 10));
    this.gameModes.push(new GameSettings(16, 16, 40));
    this.gameModes.push(new GameSettings(30, 16, 99));
    
    // default
    this.gameSettings = this.gameModes[0];

    this.scores.push(new ScoreRecord('John Doe', 42));
  }
  
  getState(): GameState {
    return this.state;
  }

  reveal(tile: Tile): void {
    this.state.gameField.reveal(tile);
    if (tile.isMine) {
      // TODO: gameover
      this.state.isDefeat = true;
    } else {
      this.state.isVictory = this.checkVictory();
    }
  }

  // TODO: refactoring
  checkVictory() {
    return this.state.gameField.tiles.filter(tile => !tile.isRevealed && !tile.isMine).length === 0;
  }

  startNewGame(): void {
    this.state = new GameState(new GameField(this.gameSettings));
  }

  resetGame(): void {
    
  }

  openSettings(): void {
    
  }
}
