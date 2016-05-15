import { Injectable } from '@angular/core';

import {Tile} from "../models/tile";
import {GameField} from "../models/game-field";
import {GameState} from "../models/game-state";

@Injectable()
export class GameStateService {

  getState(): GameState {
    // 10 9*9
    // 40 16*16
    return new GameState(new GameField(9, 9, 10));
  }
}
