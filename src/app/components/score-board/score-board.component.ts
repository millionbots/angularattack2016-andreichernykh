import {Component, Input} from '@angular/core';

import {ScoreRecord} from "../../models/score-record";
import {ScoreRecordComponent} from "./score-record.component";
import {IconComponent} from "../icon/icon.component";

@Component({
  selector: 'score-board',
  template: require('./score-board.component.html'),
  styles: [require('./score-board.component.css')],
  directives: [
    ScoreRecordComponent,
    IconComponent
  ]
})
export class ScoreBoardComponent {
  @Input() scores: ScoreRecord[] = [];
}
