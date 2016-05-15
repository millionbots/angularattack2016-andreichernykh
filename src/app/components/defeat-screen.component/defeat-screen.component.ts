import {Component, Input} from '@angular/core';

import {GameStateService} from "../../services/game-state.service";
import {IconComponent} from "../icon/icon.component";

@Component({
  selector: 'defeat-screen',
  template: require('./defeat-screen.component.html'),
  styles: [require('./defeat-screen.component.css')],
  directives: [
    IconComponent
  ]
})
export class DefeatScreenComponent {
  @Input() secondsCount: number;

  gameStateService: GameStateService;

  constructor(gameStateService: GameStateService) {
    this.gameStateService = gameStateService;
  }

  onClick(): void {
    this.gameStateService.startNewGame();
  }
}
