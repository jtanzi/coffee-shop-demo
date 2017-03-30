import { Coffee } from './coffee';
import { MenuItem } from './menuitem';

export const COFFEES: Coffee[] = [
  { blend: 'Robusto', region: 'Columbia', roast: 'medium', price: "9.50", flavor: 'Bold with hints of smokiness.' },
  { blend: 'Aribica', region: 'Nicaragua', roast: 'medium', price: "8.00", flavor: 'Subtle berry overtones with a smooth finish.'},
  { blend: 'Guatemala Antigua', region: 'Guatemala', roast: 'medium', price: "9.00", flavor: 'Vanilla with an earthy finish.' },
  { blend: 'Nightshade', region: 'Kenya', roast: 'dark', price: "9.00", flavor: 'Bold with hints of smokiness.' },
  { blend: 'Kuali Lumpour', region: 'Brazil', roast: 'dark', price: "9.00", flavor: 'Chocolate undertone with a bold and rich aftertaste.'},
]; 
 
export const MENU: MenuItem[] = [
  { name: 'drip coffee', type: 'hot beverage', sizes: ['s', 'm', 'l'], prices: ["1.50", "1.90", "2.10"] },
  { name: 'latte', type: 'hot beverage', sizes: ['s', 'm', 'l'], prices: ["2.10", "2.60", "2.80"] },
  { name: 'cappucino', type: 'hot beverage', sizes: ['s', 'm', 'l'], prices: ["2.10", "2.60", "2.80"] },
  { name: 'macchiatto', type: 'hot beverage', sizes: ['s', 'm', 'l'], prices: ["2.10", "2.60", "2.80"] },
  { name: 'latte', type: 'hot beverage', sizes: ['s', 'm', 'l'], prices: ["2.10", "2.60", "2.80"] },
  { name: 'hot tea', type: 'hot beverage', sizes: ['s', 'm', 'l'], prices: ["2.10", "2.60", "2.80"] },
  { name: 'iced coffee', type: 'cold beverage', sizes: ['s', 'm', 'l'], prices: ["2.10", "2.60", "2.80"] },
  { name: 'iced tea', type: 'cold beverage', sizes: ['s', 'm', 'l'], prices: ["2.10", "2.60", "2.80"] },
  { name: 'english muffin breakfast sandwich', type: 'breakfast', sizes: [], prices: ["3.80"] },
  { name: 'ham and cheese croissant', type: 'breakfast', sizes: [], prices: ["4.10"] },
];
