import {Component, Input} from '@angular/core';
import {Hero} from "../../models/hero";

@Component({
  selector: 'hero-state-panel',
  template: require('./hero-state-panel.component.html'),
  styles: [require('./hero-state-panel.component.css')],
  directives: [

  ]
})
export class HeroStatePanelComponent {
  @Input() hero: Hero;
}
