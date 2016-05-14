export enum TileType {
  Dirt,
  Road,
  Grass,
  Rock,
  Water
}

export class Tile {
  id: number;
  hasFogOfWar: boolean = false;
  type: TileType;

  constructor(id: number, type: TileType, hasFogOfWar: boolean = false) {
    this.id = id;
    this.type = type;
    this.hasFogOfWar = hasFogOfWar;
  }
}

