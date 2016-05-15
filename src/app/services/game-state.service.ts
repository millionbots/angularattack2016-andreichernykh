import {Injectable} from '@angular/core';

import {Subject}    from 'rxjs/Subject';
import {Observable} from 'rxjs/Rx';
import {Subscription} from 'rxjs/Subscription';

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

  private _timer:Observable<number>;
  private _timerSubscription:Subscription;

  gameModes = {
    easy: new GameSettings(9, 9, 10),
    normal: new GameSettings(16, 16, 40),
    hard: new GameSettings(30, 16, 99)
  };

  gameSettings:GameSettings;

  constructor() {
    // default
    this.gameSettings = this.gameModes.easy;

    this._scores.push(new ScoreRecord('John Doe', 42));
  }

  getState():GameState {
    return this._state;
  }

  getScores():ScoreRecord[] {
    return this._scores.slice().sort((a:ScoreRecord, b:ScoreRecord) => {
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
    } else {
      this._state.isVictory = this.checkVictory();
    }
  }

  // TODO: refactoring
  checkVictory():boolean {
    return this._state.gameField.tiles.filter(tile => !tile.isRevealed && !tile.isMine).length === 0;
  }

  startNewGame(mode:string = ''):void {
    let settings:GameSettings = mode && this.gameModes[mode];
    if (settings) {
      this.gameSettings = settings;
    } else {
      settings = this.gameSettings;
    }

    if (this._timerSubscription) {
      this._timerSubscription.unsubscribe();
    }

    // TODO: it causes rerender
    // this._timer = Observable.timer(0,1000);
    // this._timerSubscription = this._timer.subscribe(t => this._state.timeSpent = t);

    this._state = new GameState(new GameField(settings));
    this._state.startTime = Date.now();
    this._stateSource.next(this._state);
  }

  addScoreRecord(playerName:string, timeSpent:number):void {
    if (!playerName) {
      return;
    }

    this._scores.push(new ScoreRecord(playerName, timeSpent));
    this._scoresSource.next(this.getScores());

    this.startNewGame();
  }
}
