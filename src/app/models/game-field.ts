import {Tile} from "./tile";

export class GameField {
  tiles: Tile[] = [];
  width: number;
  height: number;
  minesCount: number;

  constructor(width: number = 30, height: number = 16, minesCount: number = 99) {
    this.width = width;
    this.height = height;
    this.minesCount = minesCount;

    this._generateField();
  }

  getRows(): Array<Tile[]> {
    let rows: Array<Tile[]> = [];
    for (let i = 0; i < this.tiles.length; i += this.width) {
      rows.push(this.tiles.slice(i, i + this.width));
    }

    return rows;
  }

  getSiblings(tile: Tile): Tile[] {
    let idx: number = this.tiles.indexOf(tile);
    let siblings: Tile[] = [];

    let top: Tile = this.findSiblingTopByIdx(idx);
    if (top) {
      siblings.push(top);
    }

    let topRight: Tile = this.findSiblingTopRightByIdx(idx);
    if (topRight) {
      siblings.push(topRight);
    }

    let right: Tile = this.findSiblingRightByIdx(idx);
    if (right) {
      siblings.push(right);
    }

    let bottomRight: Tile = this.findSiblingBottomRightByIdx(idx);
    if (bottomRight) {
      siblings.push(bottomRight);
    }

    let bottom: Tile = this.findSiblingBottomByIdx(idx);
    if (bottom) {
      siblings.push(bottom);
    }

    let bottomLeft: Tile = this.findSiblingBottomLeftByIdx(idx);
    if (bottomLeft) {
      siblings.push(bottomLeft);
    }

    let left: Tile = this.findSiblingLeftByIdx(idx);
    if (left) {
      siblings.push(left);
    }

    let topLeft: Tile = this.findSiblingTopLeftByIdx(idx);
    if (topLeft) {
      siblings.push(topLeft);
    }

    return siblings;
  }

  findSiblingTopByIdx(idx: number): Tile {
    let row: number = this.getTileRowByIdx(idx);
    let col: number = this.getTileColumnByIdx(idx);

    if (row === 0) {
      return null;
    }

    return this.tiles[((row - 1) * this.width) + col];
  }

  findSiblingTopRightByIdx(idx: number): Tile {
    let row: number = this.getTileRowByIdx(idx);
    if (row === 0) {
      return null;
    }

    let col: number = this.getTileColumnByIdx(idx);
    if (col === this.width - 1) {
      return null;
    }

    if (!this.tiles[((row - 1) * this.width) + col + 1]) {
      console.log(`${row} : ${col}`);
    }

    return this.tiles[((row - 1) * this.width) + col + 1];
  }

  findSiblingRightByIdx(idx: number): Tile {
    let col: number = this.getTileColumnByIdx(idx);
    if (col === this.width - 1) {
      return null;
    }

    let row: number = this.getTileRowByIdx(idx);
    return this.tiles[(row * this.width) + col + 1];
  }

  findSiblingBottomRightByIdx(idx: number): Tile {
    let row: number = this.getTileRowByIdx(idx);
    if (row === this.height - 1) {
      return null;
    }

    let col: number = this.getTileColumnByIdx(idx);
    if (col === this.width - 1) {
      return null;
    }

    return this.tiles[((row + 1) * this.width) + col + 1];
  }

  findSiblingBottomByIdx(idx: number): Tile {
    let row: number = this.getTileRowByIdx(idx);
    if (row === this.height - 1) {
      return null;
    }

    let col: number = this.getTileColumnByIdx(idx);
    return this.tiles[((row + 1) * this.width) + col];
  }

  findSiblingBottomLeftByIdx(idx: number): Tile {
    let row: number = this.getTileRowByIdx(idx);
    if (row === this.height - 1) {
      return null;
    }

    let col: number = this.getTileColumnByIdx(idx);
    if (col === 0) {
      return null;
    }

    return this.tiles[((row + 1) * this.width) + col - 1];
  }

  findSiblingLeftByIdx(idx: number): Tile {
    let col: number = this.getTileColumnByIdx(idx);
    if (col === 0) {
      return null;
    }

    let row: number = this.getTileRowByIdx(idx);
    return this.tiles[(row * this.width) + col - 1];
  }

  findSiblingTopLeftByIdx(idx: number): Tile {
    let row: number = this.getTileRowByIdx(idx);
    if (row === 0) {
      return null;
    }

    let col: number = this.getTileColumnByIdx(idx);
    if (col === 0) {
      return null;
    }

    return this.tiles[((row - 1) * this.width) + col - 1];
  }

  getTileColumnByIdx(idx: number): number {
    return idx % this.width;
  }

  getTileRowByIdx(idx: number): number {
    return Math.floor(idx / this.width);
  }

  reveal(tile: Tile): void {
    tile.isRevealed = true;
    if (!tile.isMine) {
      this._revealSiblings(tile);
    }
  }

  private _revealSiblings(tile: Tile) {
    if (tile.threatCount === 0) {
      let siblings:Tile[] = this.getSiblings(tile).filter(sibling => !sibling.isRevealed);
      siblings.forEach(sibling => {
        sibling.isRevealed = true;
        this._revealSiblings(sibling);
      });
    }
  }

  private _generateField(): void {
    let count: number = this.height * this.width;

    for (let i = 0; i < count; i++) {
      this.tiles.push(new Tile(i, i < this.minesCount));
    }

    this._shuffleTiles(this.tiles);
    this._updateThreats();

    // TODO: check if there are tiles with threatsCount > 5 and fix it

    // TODO: set mines after the first reveal
  }

  private _shuffleTiles(tiles: Tile[]): void {
    // Fisher–Yates Shuffle
    let length: number = tiles.length;
    let temp: Tile;
    let i: number;

    // While there remain elements to shuffle…
    while (length) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * length--);

      // And swap it with the current element.
      temp = tiles[length];
      tiles[length] = tiles[i];
      tiles[i] = temp;
    }
  }

  private _updateThreats(): void {
    this.tiles.forEach(tile => {
      let siblings: Tile[] = this.getSiblings(tile);
      tile.threatCount = siblings.filter(sibling => sibling.isMine).length;
    });
  }
}
