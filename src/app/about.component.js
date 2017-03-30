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
var AboutComponent = (function () {
    function AboutComponent(router) {
        this.router = router;
    }
    return AboutComponent;
}());
AboutComponent = __decorate([
    core_1.Component({
        selector: 'about',
        template: "\n    <div id=\"about-container\">\n      <h2>Drink, Eat and Enjoy!</h2>\n      <div id=\"top-image-container\">\n      \n      </div>\n      <p>Aged dripper rich white ut, caf\u00E9 au lait strong robust kopi-luwak flavour acerbic. Coffee single origin seasonal spoon grounds medium beans.</p>\n      <p>Viennese, as, frappuccino chicory decaffeinated so cinnamon gal\u00E3o. Organic, qui seasonal sweet, mazagran caf\u00E9 au lait sit brewed chicory brewed irish.</p>\n      <p>Cappuccino, so, white, so cappuccino, grounds cinnamon kopi-luwak robusta java. Skinny grounds aroma ristretto id rich latte aftertaste cream seasonal.</p>\n      <p>Robusta aged, spoon redeye rich ristretto redeye. Cappuccino caramelization skinny sweet cup black mocha doppio grinder.</p>\n      <div id=\"bottom-image-container\">\n      \n      </div>\n    </div>\n  ",
        styleUrls: ['./app.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router])
], AboutComponent);
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=about.component.js.map