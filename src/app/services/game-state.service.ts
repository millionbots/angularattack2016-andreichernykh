import {Injectable} from '@angular/core';

import { Subject }    from 'rxjs/Subject';

import {Tile} from "../models/tile";
import {GameField} from "../models/game-field";
import {GameState} from "../models/game-state";
import {ScoreRecord} from "../models/score-record";
import {GameSettings} from "../models/game-settings";

@Injectable()
export class GameStateService {
  private _state:GameState;

  // Observable string sources
  private _stateSource = new Subject<GameState>();
  // Observable string streams
  state$ = this._stateSource.asObservable();

  scores:ScoreRecord[] = [];
  gameModes:GameSettings[] = [];
  gameSettings:GameSettings;

  constructor() {
    this.gameModes.push(new GameSettings(9, 9, 10));
    this.gameModes.push(new GameSettings(16, 16, 40));
    this.gameModes.push(new GameSettings(30, 16, 99));

    // default
    this.gameSettings = this.gameModes[0];

    this.scores.push(new ScoreRecord('John Doe', 42));
  }

  getState():GameState {
    return this._state;
  }

  reveal(tile:Tile):void {
    this._state.gameField.reveal(tile);
    if (tile.isMine) {
      // TODO: gameover
      this._state.isDefeat = true;
    } else {
      this._state.isVictory = this.checkVictory();
    }
  }

  // TODO: refactoring
  checkVictory() {
    return this._state.gameField.tiles.filter(tile => !tile.isRevealed && !tile.isMine).length === 0;
  }

  startNewGame():void {
    this._state = new GameState(new GameField(this.gameSettings));
    this._stateSource.next(this._state);
  }

  resetGame():void {

  }

  openSettings():void {

  }
}
