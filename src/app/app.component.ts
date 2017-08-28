import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'we honor open source && angular';
  showSideNav = false;
  loggedIn: boolean;


  openSideNav() {
    this.showSideNav = true;
  }

  closeSideNav() {
    this.showSideNav = false;
  }

  logout() {
    this.closeSideNav();
  }

}
