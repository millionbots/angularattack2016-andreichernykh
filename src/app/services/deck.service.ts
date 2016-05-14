import {Card} from "../models/card";

export class DeckService {
  generate() {
    // TODO: generate cards randomly

    return [
      
    ];
  }
  
  _shuffle(collection) {
    // Fisher–Yates Shuffle
    let length = collection.length;
    let temp;
    let i;

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
