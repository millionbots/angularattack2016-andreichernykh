import {Tile} from "./tile";

export class GameField {
  private tiles: Array<Tile> = [];
  private width: number = 30;
  private height: number = 16;

  private get tileCount(): number {
    return this.height * this.width;
  }

  constructor(width: number = 30, height: number = 16) {
    this.width = width;
    this.height = height;

    this._generateField();
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

  private _generateField(): void {
    let count: number = this.tileCount;

    for (let i = 0; i < count; i++) {
      this.tiles.push(new Tile(i));
    }
  }
}
