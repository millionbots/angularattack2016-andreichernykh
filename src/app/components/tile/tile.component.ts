import {Component, Input} from '@angular/core';
import {Tile} from "../../models/tile";
import {IconComponent} from "../icon/icon.component";
import {GameStateService} from "../../services/game-state.service";

@Component({
  selector: 'tile',
  template: require('./tile.component.html'),
  styles: [require('./tile.component.css')],
  directives: [
    IconComponent
  ]
})
export class TileComponent {
  @Input() tile: Tile;
  gameStateService: GameStateService;

  constructor(gameStateService: GameStateService) {
    this.gameStateService = gameStateService;
  }

  getClasses(): string {
    let classes: string = '';

    if (this.tile.isRevealed) {
      classes += ' cell-revealed';
    }

    return `cell ${classes}`;
  }

  onClick(): void {
    this.gameStateService.reveal(this.tile);
  }
}
