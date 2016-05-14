import { Injectable } from '@angular/core';

import {Tile} from "../models/tile";
import {GameField} from "../models/game-field";
import {GameState} from "../models/game-state";

@Injectable()
export class GameStateService {

  getState(): GameState {
    return new GameState(new GameField());
  }
}
