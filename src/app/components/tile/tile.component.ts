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

  getTerrainClasses() {
    let terrainType: string;
    switch (this.tile.type) {
      case TileType.Dirt: 
        terrainType = 'terrain-dirt';
        break;
      case TileType.Grass:
        terrainType = 'terrain-grass';
        break;
      case TileType.Road:
        terrainType = 'terrain-road';
        break;
      case TileType.Rock:
        terrainType = 'terrain-rock';
        break;
      case TileType.Water:
        terrainType = 'terrain-water';
        break;
    }

    return `terrain ${terrainType}`;
  }
}
