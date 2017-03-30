import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'about',
  template: `
    <div class="about-container">
      <h2>The Daytrippers Story</h2> 
    </div>
  `,
  styleUrls: [ './app.component.css' ]
})
export class AboutComponent {

  constructor(
    private router: Router) { }

}
