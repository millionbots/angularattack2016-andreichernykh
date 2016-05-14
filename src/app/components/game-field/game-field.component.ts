import {Component, Input} from '@angular/core';
import {TileComponent} from "../tile/tile.component";
import {GameField} from "../../models/game-field";

@Component({
  selector: 'game-field',
  template: require('./game-field.component.html'),
  styles: [require('./game-field.component.css')],
  directives: [
    TileComponent
  ]
})
export class GameFieldComponent {
  @Input() gameField: GameField;
}
