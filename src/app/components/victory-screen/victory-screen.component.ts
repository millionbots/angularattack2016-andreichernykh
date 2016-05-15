import {Component, Input, AfterViewInit, ViewChild, ElementRef} from '@angular/core';

import {GameStateService} from "../../services/game-state.service";

@Component({
  selector: 'victory-screen',
  template: require('./victory-screen.component.html'),
  styles: [require('./victory-screen.component.css')]
})
export class VictoryScreenComponent implements AfterViewInit {
  @Input() secondsCount: number;
  @ViewChild('playerName') inputRef: ElementRef;

  gameStateService: GameStateService;

  constructor(gameStateService: GameStateService) {
    this.gameStateService = gameStateService;
  }

  ngAfterViewInit() {
    this.inputRef.nativeElement.focus();
  }

  onKeyUp(keyCode: number, name: string): void {
    if (keyCode == 13) {
      this.onSave(name);
    }
  }

  onSave(name: string): void {
    this.gameStateService.addScoreRecord(name, this.secondsCount);
  }
}
