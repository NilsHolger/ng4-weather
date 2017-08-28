import { Component, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { WeatherService } from '../../core/services/weather.service';
import { CurrentCityWeather } from '../../models/current.city-weather';
import { CitiesCollection } from '../../models/cities-collection';

@Component({
  selector: 'app-weather-selected-city',
  template: `
      <app-weather-city-detail [city]="city"
                          [inCollection]="isSelectedCityInCollection"
                          (add)="addToCollection($event)"
                          (remove)="removeFromCollection($event)">
      </app-weather-city-detail>
  `
})
export class WeatherSelectedCityComponent {
  @Input() city: CurrentCityWeather;
  cityCollection: CurrentCityWeather[] = [];
  isSelectedCityInCollection = false;

  constructor(private weatherService: WeatherService) {
  }

  addToCollection(city: CurrentCityWeather) {
    CitiesCollection.add(city);
    this.isSelectedCityInCollection = true;

  }
  removeFromCollection(city: CurrentCityWeather) {
   CitiesCollection.remove(city);
    this.isSelectedCityInCollection = false;
  }

}
