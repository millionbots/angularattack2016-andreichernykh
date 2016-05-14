export class Tile {
  id: number;
  isMine: boolean;
  isRevealed: boolean = false;

  constructor(id: number, isMine: boolean = false) {
    this.id = id;
    this.isMine = isMine;
  }
}

