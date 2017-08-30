import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DBModule } from '@ngrx/db';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MomentModule } from 'angular2-moment';
import { AppRoutingModule } from './app.routes';

import { reducers, developmentReducerFactory } from './reducers';
import { schema } from './db';
import { environment } from '../environments/environment';
import { WeatherService } from './core/services/weather.service';

import { AppComponent } from './app.component';
import { WeatherSearchComponent } from './weather/components/weather.search.component';
import { WeatherFindCityComponent } from './weather/components/weather.find-city.component';
import { WeatherPreviewListComponent } from './weather/components/weather.preview-list.component';
import { WeatherPreviewComponent } from './weather/components/weather.preview.component';
import { WeatherViewCityComponent} from './weather/components/weather.view.city-page.component';
import { WeatherSelectedCityComponent } from './weather/components/weather.selected.city-page.component';
import { WeatherCityDetailComponent } from './weather/components/weather.city-detail.component';
import { WeatherToolbarComponent } from './shared/components/weather.toolbar.component';
import { WeatherFooterComponent } from './shared/components/weather.footer.component';
import { WeatherLayoutComponent } from './shared/components/weather.layout.component';
import { WeatherSidenavComponent } from './shared/components/weather.sidenav.component';
import { WeatherSidenavNavitemComponent } from './shared/components/weather.sidenav.nav-item.component';
import { WeatherCitiesCollectionComponent } from './shared/components/weather.cities-collection.component';
import { PageNotFoundComponent } from './shared/components/page.not-found.component';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    WeatherSearchComponent,
    WeatherFindCityComponent,
    WeatherPreviewListComponent,
    WeatherPreviewComponent,
    WeatherViewCityComponent,
    WeatherSelectedCityComponent,
    WeatherCityDetailComponent,
    WeatherToolbarComponent,
    WeatherFooterComponent,
    WeatherLayoutComponent,
    WeatherSidenavComponent,
    WeatherSidenavNavitemComponent,
    WeatherCitiesCollectionComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    MaterialModule,
    MomentModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {
      reducerFactory: !environment.production ? developmentReducerFactory : undefined
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([]),
    DBModule.provideDB(schema)
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
