import {Component, Input} from '@angular/core';

@Component({
  selector: 'icon',
  template: require('./icon.component.html'),
  styles: [require('./icon.component.css')]
})
export class IconComponent {
  @Input() type: string;
}
