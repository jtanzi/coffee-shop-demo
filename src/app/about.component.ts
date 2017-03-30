import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'about',
  template: `
    <div id="about-container">
      <h2>Drink, Eat and Enjoy!</h2>
      <div id="top-image-container">
      
      </div>
      <p>Aged dripper rich white ut, café au lait strong robust kopi-luwak flavour acerbic. Coffee single origin seasonal spoon grounds medium beans.</p>
      <p>Viennese, as, frappuccino chicory decaffeinated so cinnamon galão. Organic, qui seasonal sweet, mazagran café au lait sit brewed chicory brewed irish.</p>
      <p>Cappuccino, so, white, so cappuccino, grounds cinnamon kopi-luwak robusta java. Skinny grounds aroma ristretto id rich latte aftertaste cream seasonal.</p>
      <p>Robusta aged, spoon redeye rich ristretto redeye. Cappuccino caramelization skinny sweet cup black mocha doppio grinder.</p>
      <div id="bottom-image-container">
      
      </div>
    </div>
  `,
  styleUrls: [ './app.component.css' ]
})
export class AboutComponent {

  constructor(
    private router: Router) { }

}
