import * as layout from '../actions/layout';

export interface State {
  showSideNav: boolean;
}

const initialState: State = {
  showSideNav: false
}

export function reducer(state = initialState, action: layout.Actions) {
  switch(action.type) {
    case layout.CLOSE_SIDENAV:
    return {
      showSideNav: false
    };
    case layout.OPEN_SIDENAV:
    return {
      showSideNav: true
    };
    default:
    return state;
  }
}
export const getShowSideNav = (state: State) => state.showSideNav;
