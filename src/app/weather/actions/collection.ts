import { Action } from '@ngrx/store';
import { CurrentCityWeather } from '../../models/current.city-weather';

export const ADD_CITY = '[Collection] Add City';
export const ADD_CITY_SUCCESS = '[Collection] Add City Success';
export const ADD_CITY_FAIL = '[Collection] Add City Fail';
export const REMOVE_CITY = '[Collection] Remove City';
export const REMOVE_CITY_SUCCESS = '[Collection] Remove City Success';
export const REMOVE_CITY_FAIL = '[Collection] Remove City Fail';
export const LOAD = '[Collection] Load';
export const LOAD_SUCCESS = '[Collection] Load Success';
export const LOAD_FAIL = '[Collection] Load Fail';

// add city to collections actions
export class AddCityAction implements Action {
  readonly type = ADD_CITY;
  constructor(public payload: CurrentCityWeather) {}
}

export class AddCitySuccessAction implements Action {
  readonly type = ADD_CITY_SUCCESS;
  constructor(public payload: CurrentCityWeather) {}
}

export class AddCityFailAction implements Action {
  readonly type = ADD_CITY_FAIL;
  constructor(public payload: CurrentCityWeather) {}
}

// remove city from collections action
export class RemoveCityAction implements Action {
  readonly type = REMOVE_CITY;
  constructor(public payload: CurrentCityWeather) {}
}

export class RemoveCitySuccessAction implements Action {
  readonly type = REMOVE_CITY_SUCCESS;
  constructor(public payload: CurrentCityWeather) {}
}

export class RemoveCityFailAction implements Action {
  readonly type = REMOVE_CITY_FAIL;
  constructor(public payload: CurrentCityWeather) {}
}

// load collections action
export class LoadAction implements Action {
  readonly type = LOAD;
}

export class LoadSuccessAction implements Action {
  readonly type = LOAD_SUCCESS;
  constructor(public payload: CurrentCityWeather[]) {}
}

export class LoadFailAction implements Action {
  readonly type = LOAD_FAIL;
  constructor(public payload: any) {}
}


export type Actions = AddCityAction | AddCitySuccessAction | AddCityFailAction |
                      RemoveCityAction | RemoveCitySuccessAction | RemoveCityFailAction |
                      LoadAction | LoadSuccessAction | LoadFailAction;
