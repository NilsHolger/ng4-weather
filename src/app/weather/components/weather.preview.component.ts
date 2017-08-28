import { Component, Input } from '@angular/core';
import { CurrentCityWeather } from '../../models/current.city-weather';

@Component({
  selector: 'app-weather-preview',
  template: `
        <a [routerLink]="['/cities', name]">
        <md-card>
            <md-card-title-group>
            <img md-card-sm-image *ngIf="icon" [src]="sun" />
            <md-card-title>{{name}}</md-card-title>
            <md-card-subtitle *ngIf="country">Country Code: {{country}}
            Date: {{(sunrise | amFromUnix) | amDateFormat:'DD-MM-YYYY'}}</md-card-subtitle>
            </md-card-title-group>
            <md-card-content>
                  <p *ngIf="temperature">Temperature: {{temperature}} °C Humidity {{humidity}} %</p>
                  <md-chip-list>
                    <md-chip color="primary" selected="true">Sunrise: {{(sunrise | amFromUnix)  | amDateFormat:'hh:mm:ssA'}}</md-chip>
                    <md-chip color="accent" selected="true">Sunset: {{(sunset | amFromUnix) | amDateFormat:'hh:mm:ssA'}}</md-chip>
                  </md-chip-list>
            </md-card-content>
            <md-card-actions>
            <button md-raised-button>Main: {{main}}</button>
            <button md-raised-button>Description: {{description}}</button>
            </md-card-actions>
            <md-card-footer>
              Greetings from: {{name}} <i class="material-icons">airplanemode_active</i>
             <p></p>
            </md-card-footer>
        </md-card>
        </a>
  `,
  styles: [
    `
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
export class WeatherPreviewComponent {
  @Input() weather: CurrentCityWeather;
  sun = '../../../assets/sun.png';

  get icon() {
    return this.weather.icon;
    // get icon for weather here
  }
  get name() {
    return this.weather.name;
  }
  get country() {
    return this.weather.country;
  }
  get temperature() {
    return this.weather.temperature;
  }
  get humidity() {
    return this.weather.humidity;
  }
  get main() {
    return this.weather.main;
  }
  get description() {
    return this.weather.description;
  }
  get sunrise() {
    return this.weather.sunrise;
  }
  get sunset() {
    return this.weather.sunset;
  }
}
