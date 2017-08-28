import { Component } from '@angular/core';
import { WeatherService } from '../../core/services/weather.service';
import { CurrentCityWeather } from '../../models/current.city-weather';
import { CitiesCollection } from '../../models/cities-collection';

@Component({
  selector: 'app-weather-cities-collection',
  template: `
        <div *ngIf="weather[0]" class="container">
        <div *ngFor="let w of weather">
        <a [routerLink]="['/cities', w.name]">
        <md-card>
            <md-card-title-group>
            <img md-card-sm-image [src]="sun" />
            <md-card-title>{{w.name}}</md-card-title>
            <md-card-subtitle *ngIf="w.country">Country Code: {{w.country}}
            Date: {{(w.sunrise | amFromUnix) | amDateFormat:'DD-MM-YYYY'}}</md-card-subtitle>
            </md-card-title-group>
            <md-card-content>
                  <p *ngIf="w.temperature">Temperature: {{w.temperature}} °C Humidity {{w.humidity}} %</p>
                  <md-chip-list>
                    <md-chip color="primary" selected="true">Sunrise: {{(w.sunrise | amFromUnix)  | amDateFormat:'hh:mm:ssA'}}</md-chip>
                    <md-chip color="accent" selected="true">Sunset: {{(w.sunset | amFromUnix) | amDateFormat:'hh:mm:ssA'}}</md-chip>
                  </md-chip-list>
            </md-card-content>
            <md-card-actions>
            <button md-raised-button>Main: {{w.main}}</button>
            <button md-raised-button>Description: {{w.description}}</button>
            </md-card-actions>
            <md-card-footer>
              Greetings from: {{w.name}}
             <p></p>
            </md-card-footer>
        </md-card>
        </a>
        </div>
        </div>
  `,
  styles: [
    `
    .container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
 md-card {
 width: 400px;
 height: 300px;
 margin: 15px;
}
@media only screen and (max-width: 768px) {
 md-card {
   margin: 15px 0 !important;
 }
}
md-card:hover {
 box-shadow: 3px 3px 16px -2px rgba(0, 0, 0, .5);
}
md-card-title {
 margin-right: 10px;
}
md-card-title-group {
 margin: 0;
}
a {
 color: inherit;
 text-decoration: none;
}
img {
 width: 60px;
 min-width: 60px;
 margin-left: 5px;
}
md-card-content {
 margin-top: 15px;
 margin: 15px 0 0;
}
span {
 display: inline-block;
 font-size: 13px;
}
md-card-footer {
 padding: 0 25px 25px;
}
    `
  ]
})
export class WeatherCitiesCollectionComponent {
  weather: CurrentCityWeather[];
  sun = '../../../assets/sun.png';
  constructor(private weatherService: WeatherService) {
    this.weather = [].concat.apply([], CitiesCollection.cityCollection.slice(0));
  }

}
