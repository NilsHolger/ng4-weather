import { Action } from '@ngrx/store';
import { CurrentCityWeather } from '../../models/current.city-weather';

export const SEARCH = '[CurrentCityWeather] Search';
export const SEARCH_COMPLETE = '[City] Search Complete';
export const LOAD = '[City] Load';
export const SELECT = '[City] Select';

// every action consists of at least a type and an optional payload
// expressing actions as classes enables powerful type checking in reducer functions
export class SearchAction implements Action {
  readonly type = SEARCH;
  constructor(public payload: string) {}
}

export class SearchCompleteAction implements Action {
  readonly type = SEARCH_COMPLETE;
  constructor(public payload: CurrentCityWeather[]) {}
}

export class LoadAction implements Action {
  readonly type = LOAD;
  constructor(public payload: CurrentCityWeather) {}
}

export class SelectAction implements Action {
  readonly type = SELECT;
  constructor(public payload: string) {}
}

// export type alias of all actions in this action group
// so that reducers can easily compose action types

export type Actions = SearchAction | SearchCompleteAction | LoadAction | SelectAction;
