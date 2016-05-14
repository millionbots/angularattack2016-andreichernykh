import { Injectable } from '@angular/core';

import {Tile} from "../models/tile";
import {GameField} from "../models/game-field";
import {GameState} from "../models/game-state";
import {Hero} from "../models/hero";

@Injectable()
export class GameStateService {
  getState(): GameState {
    let tiles: Tile[] = [];
    for (let i = 0; i < 64; i++) {
      tiles.push(new Tile(i, i % 5));
    }

    return new GameState(new GameField(tiles), new Hero());
  }
}
