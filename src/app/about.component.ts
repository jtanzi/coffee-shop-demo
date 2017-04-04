import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AboutComponent {

  constructor(
    private router: Router) { }

}
