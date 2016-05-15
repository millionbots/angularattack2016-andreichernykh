import {Component, Input} from '@angular/core';

import {ScoreRecord} from "../../models/score-record";

@Component({
  selector: 'score-record',
  template: require('./score-record.component.html'),
  styles: [require('./score-record.component.css')],
  directives: [
    
  ]
})
export class ScoreRecordComponent {
  @Input() record: ScoreRecord;
}
