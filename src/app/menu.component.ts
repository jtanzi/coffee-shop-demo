import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MenuItem } from './menuitem';
import { MenuService } from './menu.service';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: [ './menu.component.css' ]
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
