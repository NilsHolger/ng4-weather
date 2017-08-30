import { Injectable, InjectionToken, Optional, Inject } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Scheduler } from 'rxjs/Scheduler';
import { async } from 'rxjs/scheduler/async';
import { empty } from 'rxjs/observable/empty';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/takeUntil';

import { WeatherService } from '../../core/services/weather.service';
import * as city from '../actions/city';
import { CurrentCityWeather } from '../../models/current.city-weather';

export const SEARCH_DEBOUNCE = new InjectionToken<number>('Search_Debounce');
export const SEARCH_SCHEDULER = new InjectionToken<Scheduler>('Search Scheduler');

// effects are way to isolate and easily test side effects within application
// the topayload helper function returns just the payload of the currently dispatched action
// useful in instances where current state is not necessary

@Injectable()
export class CityEffects {
    @Effect()
    search$: Observable<Action> = this.action$
    .ofType(city.SEARCH)
    .debounceTime(this.debounce, this.scheduler|| async)
    .map(toPayload)
    .switchMap(query => {
      if (query === '') {
        return empty();
      }
      const nextSearch$ = this.action$.ofType(city.SEARCH).skip(1);
      return this.weatherService
                 .searchWeather(query)
                 .takeUntil(nextSearch$)
                 .map((cities: CurrentCityWeather[]) => new city.SearchCompleteAction(cities))
                 .catch(() => of(new city.SearchCompleteAction([])));
    });

    constructor(
      private action$: Actions,
      private weatherService: WeatherService,
      @Optional()
      @Inject(SEARCH_DEBOUNCE)
      private debounce: number = 300,
      @Optional()
      @Inject(SEARCH_SCHEDULER)
      private scheduler: Scheduler
    ) {}


}
