import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MenuItem } from './menuitem';
import { MenuService } from './menu.service';

@Component({
  selector: 'menu',
  template: `
    <div id="menu-container-1" class="menu-container">
      <h2>Hot Beverages</h2>
      <div *ngFor="let menuitem of menuHotBev" class="menu-listing" fxflex fxlayout="row" fxLayoutGap="30px" fxLayoutWrap="nowrap" fxLayoutAlign="start start">
        <h3 fxFlex="40">{{ menuitem.name }}</h3>
        <p fxFlex="20" *ngFor="let price of menuitem.prices" >{{ price }}</p>
      </div>
    </div>
    <div id="menu-container-2" class="menu-container">
      <h2>Cold Beverages</h2>
      <div *ngFor="let menuitem of menuColdBev" class="menu-listing" fxflex fxlayout="row" fxLayoutGap="30px" fxLayoutWrap="nowrap" fxLayoutAlign="start start">
        <h3 fxFlex="40">{{ menuitem.name }}</h3>
        <p fxFlex="20" *ngFor="let price of menuitem.prices" >{{ price }}</p>
      </div>
    </div>
    <div id="menu-container-3" class="menu-container">
      <h2>Breakfast</h2>
      <div *ngFor="let menuitem of menuBreakfast" class="menu-listing" fxflex fxlayout="row" fxLayoutGap="30px" fxLayoutWrap="nowrap" fxLayoutAlign="start start">
        <h3 fxFlex="60">{{ menuitem.name }}</h3>
        <p fxFlex="40" *ngFor="let price of menuitem.prices" >{{ price }}</p>
      </div>
    </div>
    <div id="menu-container-4" class="menu-container">
      <h2>Pastries</h2>
      <div *ngFor="let menuitem of menuPastries" class="menu-listing" fxflex fxlayout="row" fxLayoutGap="30px" fxLayoutWrap="nowrap" fxLayoutAlign="start start">
        <h3 fxFlex="60">{{ menuitem.name }}</h3>
        <p fxFlex="40" *ngFor="let price of menuitem.prices" >{{ price }}</p>
      </div>
    </div>
  `,
  styleUrls: [ './app.component.css' ] 
})
export class MenuComponent implements OnInit {
  menu: MenuItem[];
  menuHotBev: MenuItem[];
  menuColdBev: MenuItem[];
  menuBreakfast: MenuItem[];
  menuPastries: MenuItem[];
  selectedMenuItem: MenuItem;

  constructor(
    private router: Router,
    private menuService: MenuService) { }
    

  getMenu(): void {
    this.menuService.getMenu().then(menu => this.menu = menu);
  }
  
  getMenuHotBev(): void {
    this.menuService.getMenu()
      .then(menu => this.menuHotBev = menu.filter(elem =>
        elem.type === 'hot beverage'));
  }
  
  getMenuColdBev(): void {
    this.menuService.getMenu()
      .then(menu => this.menuColdBev = menu.filter(elem =>
        elem.type === 'cold beverage'));
  }
  
  getMenuBreakfast(): void {
    this.menuService.getMenu()
      .then(menu => this.menuBreakfast = menu.filter(elem =>
        elem.type === 'breakfast'));
  }
  
  getMenuPastries(): void {
    this.menuService.getMenu()
      .then(menu => this.menuPastries = menu.filter(elem =>
        elem.type === 'pastry'));
  }
  
  
  ngOnInit(): void {
    this.getMenuHotBev();
    this.getMenuColdBev();
    this.getMenuBreakfast();
    this.getMenuPastries();
  }

  onSelect(menuItem: MenuItem): void {
    this.selectedMenuItem = menuItem;
  }
}
