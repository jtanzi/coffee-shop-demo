import { Injectable } from '@angular/core';

import { MenuItem } from './menuitem';
import { MENU } from './data';

@Injectable()
export class MenuService {

  getMenu(): Promise<MenuItem[]> {
    return Promise.resolve(MENU);
  }
  
}
