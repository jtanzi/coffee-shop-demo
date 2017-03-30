import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MenuItem } from './menuitem';
import { MenuService } from './menu.service';

@Component({
  selector: 'menu',
  template: `
    <div *ngFor="let menuitem of menu">
      <h2>{{ menuitem.name }}</h2>
    </div>
  `,
  styleUrls: [ './app.component.css' ]
})
export class MenuComponent implements OnInit {
  menu: MenuItem[];
  selectedMenuItem: MenuItem;

  constructor(
    private router: Router,
    private menuService: MenuService) { }

  getMenu(): void {
    this.menuService.getMenu().then(menu => this.menu = menu);
  }

  ngOnInit(): void {
    this.getMenu();
  }

  onSelect(menuItem: MenuItem): void {
    this.selectedMenuItem = menuItem;
  }
}
