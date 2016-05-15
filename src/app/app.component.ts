import {Component, OnDestroy} from '@angular/core';
import {Subscription}   from 'rxjs/Subscription';

import {TileComponent} from "./components/tile/tile.component";
import {GameFieldComponent} from "./components/game-field/game-field.component";
import {ControlPanelComponent} from "./components/control-panel/control-panel.component";
import {GameStateService} from "./services/game-state.service";
import {GameState} from "./models/game-state";
import {ScoreBoardComponent} from "./components/score-board/score-board.component";
import {VictoryScreenComponent} from "./components/victory-screen/victory-screen.component";
import {ScoreRecord} from "./models/score-record";
import {ModalComponent} from "./components/modal/modal.component";

@Component({
  selector: 'my-app',
  template: require('./app.component.html'),
  styles: [require('./app.component.css')],
  directives: [
    TileComponent,
    GameFieldComponent,
    ControlPanelComponent,
    ScoreBoardComponent,
    VictoryScreenComponent,
    ModalComponent
  ],
  providers: [GameStateService]
})
export class AppComponent implements OnDestroy {
  state:GameState;
  scores:ScoreRecord[] = [];

  private _subscriptions:Subscription[] = [];

  constructor(private gameStateService:GameStateService) {
    this.gameStateService.startNewGame();
    this.state = this.gameStateService.getState();
    this.scores = this.gameStateService.getScores();

    this._subscriptions.push(this.gameStateService.state$.subscribe(state => {
      console.log('update state');
      this.state = state;
    }));

    this._subscriptions.push(this.gameStateService.scores$.subscribe(scores => {
      console.log('update scores');
      this.scores = scores;
    }));
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this._subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
