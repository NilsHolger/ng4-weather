import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/let';

import * as fromRoot from './core/reducers/layout';
import * as layout from './core/actions/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'we honor open source && angular.';
  showSideNav$: Observable<boolean>;

  constructor(private store: Store<fromRoot.State>) {
    // selectors can be applied with select operator
    // which passes state tree to provided selector
    this.showSideNav$ = this.store.select(fromRoot.getShowSideNav);
  }

  openSideNav() {
    this.store.dispatch(new layout.OpenSideNav());
  }

  closeSideNav() {
    // all state updates are handled through dispatched actions in container components
    // this provides a clear, reproducible history of state updates and user interaction
    // through the life of the application
    this.store.dispatch(new layout.CloseSideNav());
  }

  logout() {
    this.closeSideNav();
  }

}
