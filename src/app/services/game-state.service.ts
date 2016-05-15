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
  private _stateSource = new Subject<GameState>();
  state$ = this._stateSource.asObservable();

  private _scores:ScoreRecord[] = [];
  private _scoresSource = new Subject<ScoreRecord[]>();
  scores$ = this._scoresSource.asObservable();

  gameModes = {
    easy: new GameSettings(9, 9, 10),
    normal: new GameSettings(16, 16, 40),
    hard: new GameSettings(30, 16, 99)
  };

  gameSettings:GameSettings;

  constructor() {
    // default
    this.gameSettings = this.gameModes.hard;

    this._scores.push(new ScoreRecord('John Doe', 42));
  }

  getState():GameState {
    return this._state;
  }

  getScores():ScoreRecord[] {
    return this._scores.slice().sort((a: ScoreRecord, b: ScoreRecord) => {
      if (a.time > b.time) {
        return 1;
      }
      if (a.time < b.time) {
        return -1;
      }
      return 0;
    });
  }

  reveal(tile:Tile):void {
    this._state.gameField.reveal(tile);
    if (tile.isMine) {
      this._state.isDefeat = true;
      this._state.isStarted = false;
    } else {
      this._state.isVictory = this.checkVictory();
      this._state.isStarted = !this._state.isVictory;
    }
  }

  // TODO: refactoring
  checkVictory(): boolean {
    return this._state.gameField.tiles.filter(tile => !tile.isRevealed && !tile.isMine).length === 0;
  }

  startNewGame():void {
    this._state = new GameState(new GameField(this.gameSettings));
    this._state.isStarted = true;
    this._stateSource.next(this._state);
  }

  openSettings():void {

  }

  addScoreRecord(playerName: string, timeSpent: number): void {
    if (!playerName) {
      return;
    }

    this._scores.push(new ScoreRecord(playerName, timeSpent));
    this._scoresSource.next(this.getScores());
    
    this.startNewGame();
  }
}
