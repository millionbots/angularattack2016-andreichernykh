import {Component} from '@angular/core';

import {TileComponent} from "./components/tile/tile.component";
import {GameFieldComponent} from "./components/game-field/game-field.component";
import {ControlPanelComponent} from "./components/control-panel/control-panel.component";
import {GameStateService} from "./services/game-state.service";
import {GameState} from "./models/game-state";
import {HeroStatePanelComponent} from "./components/hero-state-panel/hero-state-panel.component";

@Component({
  selector: 'my-app',
  template: require('./app.component.html'),
  styles: [require('./app.component.css')],
  directives: [
    TileComponent,
    GameFieldComponent,
    ControlPanelComponent,
    HeroStatePanelComponent
  ],
  providers: [GameStateService]
})
export class AppComponent {
  state: GameState;
  
  constructor(private gameStateService: GameStateService) {
    this.state = this.gameStateService.getState();
  }
}
