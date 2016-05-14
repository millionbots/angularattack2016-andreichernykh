import {Card} from "../models/card";

export class DeckService {
  generate(): Card[] {
    // TODO: generate cards randomly

    return [
      
    ];
  }
  
  _shuffle(collection: Card[]): void {
    // Fisher–Yates Shuffle
    let length: number = collection.length;
    let temp: Card;
    let i: number;

    // While there remain elements to shuffle…
    while (length) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * length--);

      // And swap it with the current element.
      temp = collection[length];
      collection[length] = collection[i];
      collection[i] = temp;
    }
  }
}
