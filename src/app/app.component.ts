import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <nav fxflex fxlayout="row" fxLayoutGap=10px fxLayoutWrap="nowrap" fxLayoutAlign="center center">
      <a routerLink="/about" routerLinkActive="active">About Us</a>
      <a routerLink="/coffees" routerLinkActive="active">Our Coffees</a>
      <a routerLink="/menu" routerLinkActive="active">Menu</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent  { 
  title = 'Daytrippers';
}
