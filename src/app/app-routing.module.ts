import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoffeesComponent }   from './coffees.component';
import { MenuComponent }      from './menu.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'coffees',  component: CoffeesComponent },
  { path: 'menu', component: MenuComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
