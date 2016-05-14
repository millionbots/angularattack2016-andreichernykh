import {Component, Input} from '@angular/core';
import {Tile} from "../../models/tile";

@Component({
  selector: 'tile',
  template: require('./tile.component.html'),
  styles: [require('./tile.component.css')],
  directives: [

  ]
})
export class TileComponent {
  @Input() tile: Tile;

  getClasses(): string {
    let classes: string = ''; // TODO:

    return `cell ${classes}`;
  }
}
