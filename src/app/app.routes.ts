import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WeatherFindCityComponent } from './weather/components/weather.find-city.component';
import { PageNotFoundComponent } from './shared/components/page.not-found.component';
import { WeatherCitiesCollectionComponent } from './shared/components/weather.cities-collection.component';
import { WeatherViewCityComponent } from './weather/components/weather.view.city-page.component';

const routes: Routes = [
      { path: '', redirectTo: '/weather', pathMatch: 'full'},
      { path: 'weather', component: WeatherFindCityComponent},
      { path: 'cities/search', component: WeatherFindCityComponent },
      { path: 'collection', component: WeatherCitiesCollectionComponent},
      { path: 'cities/:name', component: WeatherViewCityComponent },
      { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true })],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
