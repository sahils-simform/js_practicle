/* eslint-disable no-console */


const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  
    
  
    order(starterIndex, mainIndex) {
      return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
  
    orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
      console.log(
        `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
      );
    },
  };



// The Spread Operator (...)

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy array



// Join 2 arrays

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets. NOT objects

const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);
// console.log(`${...str} Schmedtmann`);

// Real-world example

const ingredients = [
  // prompt("Let's make pasta! Ingredient 1?"),
  // prompt('Ingredient 2?'),
  // prompt('Ingredient 3'),
];
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

// Objects

const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

// without using object.assign

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);

  

// Destructuring Objects

restaurant.orderDelivery({
    time: '22:30',
    address: 'Via del Sole, 21',
    mainIndex: 2,
    starterIndex: 2,
  });

  restaurant.orderDelivery({
    address: 'Via del Sole, 21',
    starterIndex: 1,
  });

  const { name, openingHours, categories } = restaurant;
  console.log(name, openingHours, categories);

  const {
    name: restaurantName,
    openingHours: hours,
    categories: tags,
  } = restaurant;
  console.log(restaurantName, hours, tags);

  // Default values

  const { Menu = [], starterMenu: starters = [] } = restaurant;
  console.log(Menu, starters);

  // Mutating variables

  let one = 111;
  let two = 999;
  const obj = { a: 23, b: 7, c: 14 };
  ({ one, two } = obj);
  console.log(one, two);

  

  
  // Destructuring Arrays

  

  let [main, , secondary] = restaurant.categories;
  console.log(main, secondary);

  // Switching variables

  const temp = main;
   main = secondary;
   secondary = temp;
   console.log(main, secondary);

  [main, secondary] = [secondary, main];
  console.log(main, secondary);

  // Receive 2 return values from a function

  const [starter, mainCourse] = restaurant.order(2, 0);
  console.log(starter, mainCourse);

  // Nested destructuring

  const nested = [2, 4, [5, 6]];
  // const [i, , j] = nested;
  const [i, , [j, k]] = nested;
  console.log(i, j, k);

  // Default values

  const [p = 1, q = 1, r = 1] = [8, 9];
  console.log(p, q, r);
