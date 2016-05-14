import {Component, Input} from '@angular/core';
import {Tile} from "../../models/tile";
import {IconComponent} from "../icon/icon.component";

@Component({
  selector: 'tile',
  template: require('./tile.component.html'),
  styles: [require('./tile.component.css')],
  directives: [
    IconComponent
  ]
})
export class TileComponent {
  @Input() tile: Tile;

  getClasses(): string {
    let classes: string = ''; // TODO:

    return `cell ${classes}`;
  }
}
