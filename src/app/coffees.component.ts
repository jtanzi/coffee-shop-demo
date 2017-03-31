import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Coffee } from './coffee';
import { CoffeeService } from './coffee.service';

@Component({
  selector: 'coffees',
  template: `
    <div id="coffee-list" fxflex fxlayout="row" fxLayoutWrap="wrap" fxLayout.xs="column" fxLayoutAlign="center center">
      <div class="coffee-list-item" *ngFor="let coffee of coffees">
        <h2>{{ coffee.blend }}</h2>
        <p>Region: {{ coffee.region }}</p>
        <p>Roast: {{ coffee.roast }}</p>
        <p>{{ coffee.flavor }}</p>
        <p>{{ coffee.price }} /lb</p>
      </div> 
    </div>
  `,
  styleUrls: [ './app.component.css' ]
})
export class CoffeesComponent implements OnInit {
  coffees: Coffee[];
  selectedCoffee: Coffee;

  constructor(
    private router: Router,
    private coffeeService: CoffeeService) { }

  getCoffees(): void {
    this.coffeeService.getCoffees().then(coffees => this.coffees = coffees);
  }

  ngOnInit(): void {
    this.getCoffees();
  }

  onSelect(coffee: Coffee): void {
    this.selectedCoffee = coffee;
  }
}
