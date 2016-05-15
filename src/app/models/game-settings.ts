export class GameSettings {
  width: number;
  height: number;
  minesCount: number;

  constructor(width: number = 30, height: number = 16, minesCount: number = 99) {
    this.width = width;
    this.height = height;
    this.minesCount = minesCount;
  }
}
