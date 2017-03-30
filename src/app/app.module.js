"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var flex_layout_1 = require("@angular/flex-layout");
var app_component_1 = require("./app.component");
var coffee_service_1 = require("./coffee.service");
var menu_service_1 = require("./menu.service");
var about_component_1 = require("./about.component");
var coffees_component_1 = require("./coffees.component");
var menu_component_1 = require("./menu.component");
var app_routing_module_1 = require("./app-routing.module");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            app_routing_module_1.AppRoutingModule,
            flex_layout_1.FlexLayoutModule
        ],
        declarations: [
            app_component_1.AppComponent,
            about_component_1.AboutComponent,
            coffees_component_1.CoffeesComponent,
            menu_component_1.MenuComponent
        ],
        providers: [
            coffee_service_1.CoffeeService,
            menu_service_1.MenuService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map