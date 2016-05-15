import {Component, OnDestroy} from '@angular/core';
import {Subscription}   from 'rxjs/Subscription';

import {TileComponent} from "./components/tile/tile.component";
import {GameFieldComponent} from "./components/game-field/game-field.component";
import {ControlPanelComponent} from "./components/control-panel/control-panel.component";
import {GameStateService} from "./services/game-state.service";
import {GameState} from "./models/game-state";
import {ScoreBoardComponent} from "./components/score-board/score-board.component";

@Component({
  selector: 'my-app',
  template: require('./app.component.html'),
  styles: [require('./app.component.css')],
  directives: [
    TileComponent,
    GameFieldComponent,
    ControlPanelComponent,
    ScoreBoardComponent
  ],
  providers: [GameStateService]
})
export class AppComponent implements OnDestroy {
  state:GameState;

  subscription:Subscription;

  constructor(private gameStateService:GameStateService) {
    this.gameStateService.startNewGame();
    this.state = this.gameStateService.getState();

    this.subscription = this.gameStateService.state$.subscribe(state => {
      console.log('update state');
      this.state = state;
    });
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }

}
