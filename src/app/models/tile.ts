export enum TileType {
  Dirt,
  Road,
  Grass,
  Rock,
  Water
}

export class Tile {
  hasFogOfWar: boolean = false;
  type: TileType;

  constructor(type: TileType, hasFogOfWar: boolean = false) {
    this.hasFogOfWar = hasFogOfWar;
    this.type = type;
  }
}

