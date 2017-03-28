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
    MenuComponent.prototype.ngOnInit = function () {
        this.getMenu();
    };
    MenuComponent.prototype.onSelect = function (menuItem) {
        this.selectedMenuItem = menuItem;
    };
    return MenuComponent;
}());
MenuComponent = __decorate([
    core_1.Component({
        selector: 'menu',
        templateUrl: './menu.component.html',
        styleUrls: ['./menu.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        menu_service_1.MenuService])
], MenuComponent);
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=menu.component.js.map