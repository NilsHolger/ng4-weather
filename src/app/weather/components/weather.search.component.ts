import { Component, Output, Input, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-weather-search',
  templateUrl: './weather.search.component.html',
  styleUrls: ['./weather.search.component.css']
})
export class WeatherSearchComponent {
  @Input() query = '';
  @Input() searching = false;
  @Output() search = new EventEmitter<string>();



}
