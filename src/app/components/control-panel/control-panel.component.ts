import {Component} from '@angular/core';
import {CardComponent} from "./card/card.component";

@Component({
  selector: 'control-panel',
  template: require('./control-panel.component.html'),
  styles: [require('./control-panel.component.css')],
  directives: [
    CardComponent
  ]
})
export class ControlPanelComponent {

}
