"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var menu_service_1 = require("./menu.service");
var MenuComponent = (function () {
    function MenuComponent(router, menuService) {
        this.router = router;
        this.menuService = menuService;
    }
    MenuComponent.prototype.getMenu = function () {
        var _this = this;
        this.menuService.getMenu().then(function (menu) { return _this.menu = menu; });
    };
    MenuComponent.prototype.getMenuHotBev = function () {
        var _this = this;
        this.menuService.getMenu()
            .then(function (menu) { return _this.menuHotBev = menu.filter(function (elem) {
            return elem.type === 'hot beverage';
        }); });
    };
    MenuComponent.prototype.getMenuColdBev = function () {
        var _this = this;
        this.menuService.getMenu()
            .then(function (menu) { return _this.menuColdBev = menu.filter(function (elem) {
            return elem.type === 'cold beverage';
        }); });
    };
    MenuComponent.prototype.getMenuBreakfast = function () {
        var _this = this;
        this.menuService.getMenu()
            .then(function (menu) { return _this.menuBreakfast = menu.filter(function (elem) {
            return elem.type === 'breakfast';
        }); });
    };
    MenuComponent.prototype.getMenuPastries = function () {
        var _this = this;
        this.menuService.getMenu()
            .then(function (menu) { return _this.menuPastries = menu.filter(function (elem) {
            return elem.type === 'pastry';
        }); });
    };
    MenuComponent.prototype.ngOnInit = function () {
        this.getMenuHotBev();
        this.getMenuColdBev();
        this.getMenuBreakfast();
        this.getMenuPastries();
    };
    MenuComponent.prototype.onSelect = function (menuItem) {
        this.selectedMenuItem = menuItem;
    };
    return MenuComponent;
}());
MenuComponent = __decorate([
    core_1.Component({
        selector: 'menu',
        template: "\n    <div id=\"menu-container-1\" class=\"menu-container\">\n      <h2>Hot Beverages</h2>\n      <div *ngFor=\"let menuitem of menuHotBev\" class=\"menu-listing\" fxflex fxlayout=\"row\" fxLayoutGap=\"30px\" fxLayoutWrap=\"nowrap\" fxLayoutAlign=\"start start\">\n        <h3 fxFlex=\"40\">{{ menuitem.name }}</h3>\n        <p fxFlex=\"20\" *ngFor=\"let price of menuitem.prices\" >{{ price }}</p>\n      </div>\n    </div>\n    <div id=\"menu-container-2\" class=\"menu-container\">\n      <h2>Cold Beverages</h2>\n      <div *ngFor=\"let menuitem of menuColdBev\" class=\"menu-listing\" fxflex fxlayout=\"row\" fxLayoutGap=\"30px\" fxLayoutWrap=\"nowrap\" fxLayoutAlign=\"start start\">\n        <h3 fxFlex=\"40\">{{ menuitem.name }}</h3>\n        <p fxFlex=\"20\" *ngFor=\"let price of menuitem.prices\" >{{ price }}</p>\n      </div>\n    </div>\n    <div id=\"menu-container-3\" class=\"menu-container\">\n      <h2>Breakfast</h2>\n      <div *ngFor=\"let menuitem of menuBreakfast\" class=\"menu-listing\" fxflex fxlayout=\"row\" fxLayoutGap=\"30px\" fxLayoutWrap=\"nowrap\" fxLayoutAlign=\"start start\">\n        <h3 fxFlex=\"60\">{{ menuitem.name }}</h3>\n        <p fxFlex=\"40\" *ngFor=\"let price of menuitem.prices\" >{{ price }}</p>\n      </div>\n    </div>\n    <div id=\"menu-container-4\" class=\"menu-container\">\n      <h2>Pastries</h2>\n      <div *ngFor=\"let menuitem of menuPastries\" class=\"menu-listing\" fxflex fxlayout=\"row\" fxLayoutGap=\"30px\" fxLayoutWrap=\"nowrap\" fxLayoutAlign=\"start start\">\n        <h3 fxFlex=\"60\">{{ menuitem.name }}</h3>\n        <p fxFlex=\"40\" *ngFor=\"let price of menuitem.prices\" >{{ price }}</p>\n      </div>\n    </div>\n  ",
        styleUrls: ['./app.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        menu_service_1.MenuService])
], MenuComponent);
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=menu.component.js.map