import { Component } from '@angular/core';

@Component({
  selector: 'app-weather-layout',
  template: `
        <md-sidenav-container fullscreen>

        <ng-content></ng-content>

        </md-sidenav-container>
  `,
  styles: [
    `
          md-sidenav-container {
            background: rgba(0, 0, 0, 0.3);
          }
          *, /deep/ * {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smooting: grayscale;
          }
    `
  ]
})
export class WeatherLayoutComponent {

}
