import {Component, } from '@angular/core';

import {TileComponent} from "./components/tile/tile.component";
import {GameFieldComponent} from "./components/game-field/game-field.component";
import {ControlPanelComponent} from "./components/control-panel/control-panel.component";
import {GameField} from "./models/game-field";
import {Tile, TileType} from "./models/tile";

@Component({
  selector: 'my-app',
  template: require('./app.component.html'),
  styles: [require('./app.component.css')],
  directives: [
    TileComponent,
    GameFieldComponent,
    ControlPanelComponent
  ]
})
export class AppComponent {
  gameField: GameField;
  
  constructor() {
    this.gameField = new GameField();
    for (let i = 0; i < 64; i++) {
      this.gameField.tiles.push(new Tile(i, i % 5));
    }
  }
}
