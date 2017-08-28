import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-weather-toolbar',
  template: `
  <md-toolbar color="accent">
  <button md-icon-button (click)="openMenu.emit()">
  <md-icon>menu</md-icon>
  </button>
  <span>Angular 4 Weather</span>

 <!-- This fills the remaining space of the current row -->
 <span class="example-fill-remaining-space"></span>

 <span>Created with Angular CLI</span>
  <ng-content></ng-content>
  </md-toolbar>
  `,
  styles: [
    `
    .example-fill-remaining-space {
      flex: 1 1 auto;
}
    `
  ]
})
export class WeatherToolbarComponent {
  @Output() openMenu = new EventEmitter();
}
