import { Component } from '@angular/core';

@Component({
  selector: 'app-weather-footer',
  template: `
  <footer>
    <md-toolbar color="primary">
    <span>Promise Version. Angular Component Service Architecture. Intercomponent Communication.</span>
   <span class="example-fill-remaining-space"></span>

   <span>Made with all <md-icon>favorite</md-icon> in the world</span>
    <ng-content></ng-content>
    </md-toolbar>
  </footer>,
  `,
  styles: [`
    footer {
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    white-space: nowrap;
    overflow: hidden;
    font: inherit;
    border: none;
    line-height: normal;
    user-select: none;
    z-index: 2;
    display: block;
    height: 60px;
    background: top no-repeat #fff;
    font-weight: 400;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    border-top: none;
    background-size: 100% 1px;
    background-image: -webkit-linear-gradient(top,#bbb,#bbb 100%);
    background-image: linear-gradient(180deg,#bbb,#bbb 100%);
    }
    .example-fill-remaining-space {
      flex: 1 1 auto;
    }
    `]
})
export class WeatherFooterComponent {
}
