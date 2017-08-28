import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { CurrentCityWeather } from '../../models/current.city-weather';
import { WeatherService } from '../../core/services/weather.service';


@Component({
  selector: 'app-weather-find-city',
  template: `
        <app-weather-search [query]="searchQuery" [searching]="loading" (search)="search($event)">
        </app-weather-search>
        <app-weather-preview-list [weather]="weather"></app-weather-preview-list>

  `
})
export class WeatherFindCityComponent implements OnInit {
    searchQuery = 'Search For A City';
    weatherCacheArray: CurrentCityWeather[] = [];
    weather: CurrentCityWeather[] = [];
    loading = true;

    constructor(private weatherService: WeatherService) {

    }

    search(query: string): void {
      console.log(query);
      if (query === '' || query === null || query === undefined) {
        this.defaultSearch(['Hamburg', 'Paris', 'New York', 'London', 'Cape Town', 'Amsterdam']);
      } else {
      this.weatherService.searchWeather(query).then (weather => this.weather = weather);
      }
     }
    ngOnInit() {
        this.defaultSearch(['Tokyo', 'Istanbul', 'Berlin', 'San Francisco', 'Sydney', 'Rio de Janeiro']);
    }

    defaultSearch(countries: Array<string>) {
      [
        ...countries
      ].forEach((city) => this.weatherService.searchWeather(city).then (weather => {
                this.weather.push(weather[0]);
              }));
    }

    defaultSearch1() {
      [
        'Tokyo',
        'Istanbul',
        'Berlin',
        'San Francisco',
        'Sydney',
        'Rio de Janeiro'
      ].forEach((city) => this.weatherService.searchWeather(city).then (weather => {
                this.weather.push(weather[0]);
              }));
    }

}
