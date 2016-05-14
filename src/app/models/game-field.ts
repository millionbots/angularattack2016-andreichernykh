import {Tile} from "./tile";

export class GameField {
  private tiles: Array<Tile> = [];
  private width: number = 8;
  
  constructor(tiles: Array<Tile>) {
    this.tiles = tiles;
  }

  getRows(): Array<Tile[]> {
    let rows: Array<Tile[]> = [];
    for (let i = 0; i < this.tiles.length; i += this.width) {
      rows.push(this.tiles.slice(i, i + this.width));
    }

    return rows;
  }

  findSiblingLeft(tile: Tile) {

  }

  findSiblingRight(tile: Tile) {

  }

  findSiblingUp(tile: Tile) {

  }

  findSiblingDown(tile: Tile) {

  }
}
