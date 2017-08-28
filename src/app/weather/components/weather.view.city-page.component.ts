import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { WeatherService } from '../../core/services/weather.service';
import { CurrentCityWeather } from '../../models/current.city-weather';

import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-weather-view-city',
  template: `
      <app-weather-selected-city [city]="city"></app-weather-selected-city>
  `
})
export class WeatherViewCityComponent implements OnInit {
        city: CurrentCityWeather;
        constructor(private weatherService: WeatherService, private activatedRoute: ActivatedRoute) {
        }

        ngOnInit() {
          this.activatedRoute.paramMap
              .switchMap((params: ParamMap) => this.weatherService.searchWeather(params.get('name')))
              .subscribe(weather => this.city = weather);
        }

}
