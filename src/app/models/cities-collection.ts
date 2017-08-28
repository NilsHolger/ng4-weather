import { CurrentCityWeather } from './current.city-weather';
export class CitiesCollection {
  static cityCollection: CurrentCityWeather[] = [];

  static add(city: CurrentCityWeather) {
    CitiesCollection.cityCollection.push(city);
    console.log(CitiesCollection.cityCollection.length);
  }

  static remove(city: CurrentCityWeather) {
    console.log(city[0].name);
    CitiesCollection.cityCollection = CitiesCollection.cityCollection.filter(entry => entry[0].name !== city[0].name);
    console.log(CitiesCollection.cityCollection.length);
  }

}
