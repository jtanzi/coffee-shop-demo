import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/home" routerLinkActive="active">Home</a>
      <a routerLink="/coffees" routerLinkActive="active">Our Coffees</a>
      <a routerLink="/menu" routerLinkActive="active">Menu</a>
    </nav>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent  { 
  title = 'Drips and Sips';
}
