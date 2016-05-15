export class ScoreRecord {
  playerName: string;
  time: number;
  // TODO: rank (Novice, Professional ...) 
  
  constructor(playerName: string, time: number) {
    this.playerName = playerName;
    this.time = time;
  }
}
