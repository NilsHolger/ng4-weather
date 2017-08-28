import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { CurrentCityWeather } from '../../models/current.city-weather';

@Injectable()
export class WeatherService {
  private WEATHER_URL = 'http://api.openweathermap.org/data/2.5';
  private API_KEY = '5a043a1bd95bf3ee500eb89de107b41e';

  private currentCityWeather: CurrentCityWeather[] = [];

  constructor(private http: Http) {}

  searchWeather(queryCity: string): Promise<CurrentCityWeather[]> {
    return this.http.get(`${this.WEATHER_URL}/weather?q=${queryCity.trim()}&appid=${this.API_KEY}`)
    .toPromise()
    .then(res => this.transform(res.json() as CurrentCityWeather[]))
    .catch(this.handleError);
  }

  private transform(data): CurrentCityWeather[] {
    console.log(data.sys.country);
    const weatherData = {
     temperature: this.round(this.kelvinToCelsius(data.main.temp), 0).toString(),
     humidity: data.main.humidity,
     icon: data.weather[0].id,
     name: data.name,
     country: data.sys.country,
     main: data.weather[0].main,
     description: data.weather[0].description,
     sunrise: data.sys.sunrise,
     sunset: data.sys.sunset
   };
   return [ weatherData ];
    }

    private round(value, decimals = 1) {
      const x = Math.pow(10, decimals);
      return Math.round(x * value ) / x;
    }

    private kelvinToCelsius = (kelvin) => kelvin - 273.15;

  private handleError(error: any): Promise<any> {
    console.error('An error occured', error);
    return Promise.resolve([]);
  }
  }
