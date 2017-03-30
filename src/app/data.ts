import { Coffee } from './coffee';
import { MenuItem } from './menuitem';

export const COFFEES: Coffee[] = [
  { blend: 'Robusto', region: 'Columbia', roast: 'medium', price: "9.50", flavor: 'Bold with hints of smokiness.' },
  { blend: 'Aribica', region: 'Nicaragua', roast: 'medium', price: "8.00", flavor: 'Subtle berry overtones with a smooth finish.'},
  { blend: 'Guatemala Antigua', region: 'Guatemala', roast: 'medium', price: "9.00", flavor: 'Vanilla with an earthy finish.' },
  { blend: 'Nightshade', region: 'Kenya', roast: 'dark', price: "10.400", flavor: 'Bold with hints of smokiness.' },
  { blend: 'Kuali Lumpour', region: 'Brazil', roast: 'dark', price: "12.30", flavor: 'Chocolate undertone with a bold and rich aftertaste.'},
  { blend: 'Viennese Cafe', region: 'Italy', roast: 'medium', price: "11.50", flavor: 'Nutty and berry overtones, smooth finish.'},
  { blend: 'Java Mocha', region: 'Java', roast: 'dark', price: "9.00", flavor: 'Smooth and polished with an earthy finish.'},
  { blend: 'Carribean Premium', region: 'Haiti', roast: 'medium', price: "11.35", flavor: 'Bold and flavorful with notes of hazelnut.'},
]; 
 
export const MENU: MenuItem[] = [
  { name: 'Drip Coffee', type: 'hot beverage', sizes: ['s', 'm', 'l'], prices: ["1.50", "1.90", "2.10"] },
  { name: 'Latte', type: 'hot beverage', sizes: ['s', 'm', 'l'], prices: ["2.10", "2.60", "2.80"] },
  { name: 'Cappucino', type: 'hot beverage', sizes: ['s', 'm', 'l'], prices: ["2.10", "2.60", "2.80"] },
  { name: 'Macchiatto', type: 'hot beverage', sizes: ['s', 'm', 'l'], prices: ["2.10", "2.60", "2.80"] },
  { name: 'Hot Tea', type: 'hot beverage', sizes: ['s', 'm', 'l'], prices: ["2.10", "2.60", "2.80"] },
  { name: 'Iced Coffee', type: 'cold beverage', sizes: ['s', 'm', 'l'], prices: ["2.10", "2.60", "2.80"] },
  { name: 'Iced Tea', type: 'cold beverage', sizes: ['s', 'm', 'l'], prices: ["2.10", "2.60", "2.80"] },
  { name: 'Bacon, Egg & Cheddar Sandwich', type: 'breakfast', sizes: [], prices: ["3.80"] },
  { name: 'Ham & Cheese Croissant', type: 'breakfast', sizes: [], prices: ["4.10"] },
  { name: 'Strawberry & Cheese Croissant', type: 'pastry', sizes: [], prices: ["4.10"] },
  { name: 'Blueberry & Orange Scone', type: 'pastry', sizes: [], prices: ["4.10"] },
  { name: 'Strawberry & Cheese Croissant', type: 'pastry', sizes: [], prices: ["4.10"] }, 
];
