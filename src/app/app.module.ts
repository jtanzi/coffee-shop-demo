import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { CoffeeService } from './coffee.service';
import { CoffeesComponent }      from './coffees.component';
import { MenuComponent }      from './menu.component';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports:      [ 
    BrowserModule,
    AppRoutingModule
   ],
  declarations: [ 
    AppComponent,
    CoffeesComponent,
    MenuComponent
   ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
