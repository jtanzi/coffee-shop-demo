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
var coffee_service_1 = require("./coffee.service");
var CoffeesComponent = (function () {
    function CoffeesComponent(router, coffeeService) {
        this.router = router;
        this.coffeeService = coffeeService;
    }
    CoffeesComponent.prototype.getCoffees = function () {
        var _this = this;
        this.coffeeService.getCoffees().then(function (coffees) { return _this.coffees = coffees; });
    };
    CoffeesComponent.prototype.ngOnInit = function () {
        this.getCoffees();
    };
    CoffeesComponent.prototype.onSelect = function (coffee) {
        this.selectedCoffee = coffee;
    };
    return CoffeesComponent;
}());
CoffeesComponent = __decorate([
    core_1.Component({
        selector: 'coffees',
        template: "\n    <div id=\"coffee-list\" fxflex fxlayout=\"row\" fxLayoutWrap=\"wrap\" fxLayout.xs=\"column\" fxLayoutAlign=\"center center\">\n      <div class=\"coffee-list-item\" *ngFor=\"let coffee of coffees\">\n        <h2>{{ coffee.blend }}</h2>\n        <p>Region: {{ coffee.region }}</p>\n        <p>Roast: {{ coffee.roast }}</p>\n        <p>{{ coffee.flavor }}</p>\n        <p>{{ coffee.price }} /lb</p>\n      </div> \n    </div>\n  ",
        styleUrls: ['./app.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        coffee_service_1.CoffeeService])
], CoffeesComponent);
exports.CoffeesComponent = CoffeesComponent;
//# sourceMappingURL=coffees.component.js.map