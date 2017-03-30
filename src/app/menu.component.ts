import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MenuItem } from './menuitem';
import { MenuService } from './menu.service';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
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
