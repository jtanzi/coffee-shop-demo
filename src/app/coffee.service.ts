import { Injectable } from '@angular/core';

import { Coffee } from './coffee';
import { COFFEES } from './data';

@Injectable()
export class CoffeeService {

  getCoffees(): Promise<Coffee[]> {
    return Promise.resolve(COFFEES);
  }
  
}
