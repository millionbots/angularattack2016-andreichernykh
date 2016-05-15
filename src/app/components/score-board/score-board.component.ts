import {Component, Input} from '@angular/core';

import {GameStateService} from "../../services/game-state.service";
import {ScoreRecord} from "../../models/score-record";
import {ScoreRecordComponent} from "./score-record.component";

@Component({
  selector: 'score-board',
  template: require('./score-board.component.html'),
  styles: [require('./score-board.component.css')],
  directives: [
    ScoreRecordComponent
  ]
})
export class ScoreBoardComponent {
  @Input() scores: ScoreRecord[] = [];
}
