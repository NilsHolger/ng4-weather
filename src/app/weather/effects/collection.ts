import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { Database } from '@ngrx/db';
import { Observable } from 'rxjs/Observable';
import { defer } from 'rxjs/observable/defer';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/toArray';

import * as collection from '../actions/collection';
import { CurrentCityWeather } from '../../models/current.city-weather';

@Injectable()
export class CollectionEffects {
  // this effect does not yield any actions back to the store
  // set dispatch to false to hint to @ngrx/effects that it should
  // ignore any elements of this effect stream
  // the defer observable accepts an observable factory function
  // that is called when the observable is subscribed to
  // wrapping the database open call in defer makes effect easier to test
  @Effect({ dispatch: false })
  openDB$: Observable<any> = defer(() => {
    return this.db.open('ng4_weather_app');
  });

  //this effect uses starwith operator to trigger effect immediately on startup
  @Effect()
  loadCollection$: Observable<Action> = this.actions$
    .ofType(collection.LOAD)
    .startWith(new collection.LoadAction())
    .switchMap(() =>
      this.db
        .query('cities')
        .toArray()
        .map((cities: CurrentCityWeather[]) => new collection.LoadSuccessAction(cities))
        .catch(error => of(new collection.LoadFailAction(error)))
    );

  @Effect()
  addCityToCollection$: Observable<Action> = this.actions$
    .ofType(collection.ADD_CITY)
    .map((action: collection.AddCityAction) => action.payload)
    .mergeMap(city =>
      this.db
        .insert('cities', [city])
        .map(() => new collection.AddCitySuccessAction(city))
        .catch(() => of(new collection.AddCityFailAction(city)))
    );

  @Effect()
  removeCityToCollection$: Observable<Action> = this.actions$
    .ofType(collection.REMOVE_CITY)
    .map((action: collection.RemoveCityAction) => action.payload)
    .mergeMap(city =>
      this.db
        .executeWrite('cities', 'delete', [city.name])
        .map(() => new collection.RemoveCitySuccessAction(city))
        .catch(() => of(new collection.RemoveCityFailAction(city)))
    );


  constructor(private actions$: Actions, private db: Database) { }
}
