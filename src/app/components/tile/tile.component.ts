import {Component, Input} from '@angular/core';
import {Tile, TileType} from "../../models/tile";

@Component({
  selector: 'tile',
  template: require('./tile.component.html'),
  styles: [require('./tile.component.css')],
  directives: [

  ]
})
export class TileComponent {
  @Input() tile: Tile;
}
