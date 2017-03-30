import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppComponent }  from './app.component';
import { CoffeeService } from './coffee.service';
import { MenuService } from './menu.service';
import { AboutComponent } from './about.component';
import { CoffeesComponent } from './coffees.component';
import { MenuComponent } from './menu.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports:      [ 
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule
   ],
  declarations: [ 
    AppComponent,
    AboutComponent,
    CoffeesComponent,
    MenuComponent
   ],
  providers: [ 
    CoffeeService,
    MenuService
   ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
