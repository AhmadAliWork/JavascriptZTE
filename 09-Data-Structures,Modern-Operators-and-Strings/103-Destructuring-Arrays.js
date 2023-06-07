'use strict';


const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // Todo: Write a function for order food
  order: function (starterMenuIndex, mainMenuIndex) {
    return [
      this.starterMenu[starterMenuIndex],
      this.mainMenu[mainMenuIndex],
    ]

  }
};

/*
const [first, second] = restaurant.categories;             // Output:   Italian Pizzeria
const [first, ,second] = restaurant.categories;            // Output:  Italian Vegetarian
*/

let [mainCategory, secondaryCategory] = restaurant.categories;
console.log(mainCategory, secondaryCategory);                             // Output: Italian Pizzeria

[mainCategory, secondaryCategory] = [secondaryCategory, mainCategory]     // ? Switching variable
console.log(mainCategory, secondaryCategory);                             // Output: Pizzeria Italian


// ! we destruct order function return value

let orders = restaurant.order(2,0)
console.log(orders);                                                      // Output: [ 'Garlic Bread', 'Pizza' ]


// receive two return values from the function
const [starter, mainCourse] = orders;
console.log(starter, mainCourse);                                         // Output: Garlic Bread Pizza



// TODO Nested Arrays

const nested = [2, 4, [5, 6]]


const [i, ,[j, k] ] = nested;

console.log(i, j, k);                                                     // Output:  2 5 6


// TODO Default Values

/* const [p, q, r] = [8, 9];                                              Output:  8 9 undefined    */

const [p=1, q=1, r=1] = [8,9];
console.log(p, q, r);                                                  // Output:  8 9 1