export enum CardType {
  Action,
  Weapon,
  Spell,
  Bonus
}

export class CardMeta {
  private _name: string;
  private _type: CardType;
  private _description: string;

  constructor(name: string, type: CardType, description: string) {
    this._name = name;
    this._type = type;
    this._description = description;
  }

  get name(): string {
    return this._name;
  }

  get type(): CardType {
    return this._type;
  }

  get description(): string {
    return this._description;
  }
}

export class Card {
  private _meta: CardMeta;
  isActive: boolean = false;

  constructor(meta: CardMeta) {
    this._meta = meta;
  }

  get meta(): CardMeta {
    return this._meta;
  }
}
