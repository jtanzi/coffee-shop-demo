import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Coffee } from './coffee';
import { CoffeeService } from './coffee.service';

@Component({
  selector: 'coffees',
  templateUrl: './coffee.component.html',
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
