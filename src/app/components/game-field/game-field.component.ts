import {Component} from '@angular/core';
import {TileComponent} from "../tile/tile.component";

@Component({
  selector: 'game-field',
  template: require('./game-field.component.html'),
  styles: [require('./game-field.component.css')],
  directives: [
    TileComponent
  ]
})
export class GameFieldComponent {
  
}
