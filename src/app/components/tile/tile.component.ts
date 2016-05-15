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

  getCounterClasses(): string {
    let classes: string = 'threatCounter';

    switch (this.tile.threatCount) {
      case 1:
        classes += ' threatCounter-1';
        break;
      case 2:
        classes += ' threatCounter-2';
        break;
      case 3:
        classes += ' threatCounter-3';
        break;
      case 4:
      default:
        classes += ' threatCounter-many';
    }

    if (this.tile.isRevealed) {
      classes += ' cell-revealed';
    }

    return `cell ${classes}`;
  }

  onClick(): void {
    this.gameStateService.reveal(this.tile);
  }
}
