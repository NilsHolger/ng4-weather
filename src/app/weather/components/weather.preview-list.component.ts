import { Component, Input, OnInit } from '@angular/core';
import { CurrentCityWeather } from '../../models/current.city-weather';

@Component({
  selector: 'app-weather-preview-list',
  template: `
    <app-weather-preview *ngFor="let weather of weather" [weather]="weather"></app-weather-preview>
  `,
  styles: [
    `
    :host {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    `
  ]
})
export class WeatherPreviewListComponent implements OnInit {
  @Input() weather: CurrentCityWeather[];

  constructor() {}

  ngOnInit() {

  }
}
