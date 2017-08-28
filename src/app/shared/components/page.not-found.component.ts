import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
      <md-card>
      <md-card-header>
      <md-card-title>404: Page Not Found</md-card-title>
      </md-card-header>
      <img md-card-image src="../../assets/404.jpg">
        <md-card-content>
            <p>It seems that the page you are searching for doesn't exist yet.</p>
        </md-card-content>
        <md-card-actions>
              <button md-raised-button color="warn" routerLink="/">Take me Home</button>
        </md-card-actions>
      </md-card>
  `,
  styles: [ `
    :host {
      display: flex;
      justify-content: center;
      margin: 75px;
    }
   md-card {
   width: 400px;
   height: 300px;
   margin: 15px;
   text-align: center;
  }
  @media only screen and (max-width: 768px) {
   md-card {
     margin: 15px 0 !important;
   }
  }
  md-card:hover {
   box-shadow: 3px 3px 16px -2px rgba(0, 0, 0, .5);
  }
  md-card-title {
  text-align: center;
  }
  md-card-title-group {
   margin: 0;
  }
  a {
   color: inherit;
   text-decoration: none;
  }
  img {
   width: 120px;
   min-width: 120px;
   margin-left: 5px;
  }
  md-card-content {
   margin-top: 15px;
   margin: 15px 0 0;
  }
  span {
   display: inline-block;
   font-size: 13px;
  }
  md-card-footer {
   padding: 0 25px 25px;
  }
      `
    ]
  })
export class PageNotFoundComponent {

}
