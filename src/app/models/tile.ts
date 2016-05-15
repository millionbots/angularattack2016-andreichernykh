export class Tile {
  id: number;
  isMine: boolean;
  isRevealed: boolean = false;
  threatCount: number = 0;

  constructor(id: number, isMine: boolean = false, threatCount: number = 0) {
    this.id = id;
    this.isMine = isMine;
    this.threatCount = threatCount;
  }
}

