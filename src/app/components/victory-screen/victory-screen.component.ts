import {Component, Input, AfterViewInit, ViewChild, ElementRef, OnInit} from '@angular/core';

import {GameStateService} from "../../services/game-state.service";
import {IconComponent} from "../icon/icon.component";

@Component({
  selector: 'victory-screen',
  template: require('./victory-screen.component.html'),
  styles: [require('./victory-screen.component.css')],
  directives: [
    IconComponent
  ]
})
export class VictoryScreenComponent implements AfterViewInit, OnInit {
  @Input() secondsCount: number;
  @Input() startTime: number; // TODO: remove
  @ViewChild('playerName') inputRef: ElementRef;

  gameStateService: GameStateService;

  constructor(gameStateService: GameStateService) {
    this.gameStateService = gameStateService;
  }
  
  ngOnInit() {
    this.secondsCount = Math.floor((Date.now() - this.startTime) / 1000);
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
