import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CurrentCityWeather } from '../../models/current.city-weather';

@Component({
  selector: 'app-weather-city-detail',
  template: `
  <md-card *ngIf="city">
      <md-card-title-group>
      <img md-card-sm-image *ngIf="city[0].icon" [src]="sun" />
      <md-card-title>{{city[0].name}}</md-card-title>
      <md-card-subtitle *ngIf="city[0].country">Country Code: {{city[0].country}}
      Date: {{(city[0].sunrise | amFromUnix) | amDateFormat:'DD-MM-YYYY'}}</md-card-subtitle>
      </md-card-title-group>
      <md-card-content>
            <p *ngIf="city[0].temperature">Temperature: {{city[0].temperature}} °C Humidity {{city[0].humidity}} %</p>
            <md-chip-list>
              <md-chip color="primary" selected="true">Sunrise: {{(city[0].sunrise | amFromUnix)  | amDateFormat:'hh:mm:ssA'}}</md-chip>
              <md-chip color="accent" selected="true">Sunset: {{(city[0].sunset | amFromUnix) | amDateFormat:'hh:mm:ssA'}}</md-chip>
            </md-chip-list>
      </md-card-content>
      <md-card-actions>
      <button md-raised-button>Main: {{city[0].main}}</button>
      <button md-raised-button>Description: {{city[0].description}}</button>
      </md-card-actions>
      <md-card-footer class="footer">
        <!-- new web component here -->
      </md-card-footer>
      <md-card-actions align="start">
              <button md-raised-button color="warn" *ngIf="inCollection" (click)="remove.emit(city)">
                    Remove City from Collection
              </button>
              <button md-raised-button color="primary" *ngIf="!inCollection" (click)="add.emit(city)">
                    Add City to Collection
              </button>
      </md-card-actions>
  </md-card>
  `,
  styles: [
    `
    :host {
      display: flex;
      justify-content: center;
      margin: 75px;
    }
    md-card {
      max-width: 600px;
    }
    md-card-title-group {
      margin-left: 0;
    }
    img {
      width: 60px;
      min-width: 60px;
      margin-left: 5px;
    }
    md-card-content {
      margin: 15px 0 50px;
    }
    md-card-actions {
      margin: 25px 0 0 !important;
    }
    md-card-footer {
      padding: 0 25px 25px;
      position: relative;
    }

    `
  ]
})
export class WeatherCityDetailComponent {
  // TODO get more properties, details from API to display here in details component
  @Input() city: CurrentCityWeather;
  @Input() inCollection: boolean;
  @Output() add = new EventEmitter<CurrentCityWeather>();
  @Output() remove = new EventEmitter<CurrentCityWeather>();

  sun = '../../../assets/sun.png';

  get icon() {
    return this.city.icon;
    // get icon for weather here
  }
  get name() {
    return this.city.name;
  }
  get country() {
    return this.city.country;
  }
  get temperature() {
    return this.city.temperature;
  }
  get humidity() {
    return this.city.humidity;
  }
  get main() {
    return this.city.main;
  }
  get description() {
    return this.city.description;
  }
  get sunrise() {
    return this.city.sunrise;
  }
  get sunset() {
    return this.city.sunset;
  }

}
