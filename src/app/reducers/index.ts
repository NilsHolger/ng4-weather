import { ActionReducerMap, createSelector, createFeatureSelector, compose,
         ActionReducer, combineReducers, Action, ActionReducerFactory } from '@ngrx/store';
import * as FromRouter from '@ngrx/router-store';
import { environment } from '../../environments/environment';

import * as fromLayout from '../core/reducers/layout';

export interface State {
  layout: fromLayout.State;
}

// state is composed of a map of action reducer functions
// these reducer functions are called with each dispatched action
// and the current or initial state and return a new immutable state

export const reducers: ActionReducerMap<State> = {
  layout: fromLayout.reducer
}

export function logger (reducer: ActionReducer<State>) {
  return function(state: State, action: any) {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  };
}

export const developmentReducerFactory: ActionReducerFactory<State, Action> = compose(logger, combineReducers);

export const getLayoutState = createFeatureSelector<fromLayout.State>('layout');
export const getShowSideNav = createSelector(getLayoutState, fromLayout.getShowSideNav);
