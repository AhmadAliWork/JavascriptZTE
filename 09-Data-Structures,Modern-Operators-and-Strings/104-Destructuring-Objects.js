const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },

    order: function (starterMenuIndex, mainMenuIndex) {
        return [
          this.starterMenu[starterMenuIndex],
          this.mainMenu[mainMenuIndex],
        ]
    
      },
    /* when we have so many params for the function so it can be hard to know the order of params so we pass object as an argument in the function
        orderDelivery: function (obj) {
            console.log(obj); //  { time: '22:30', address: 'PCSIR', mainIndex: 2, starterIndex: 2 }
        },
        then we destructure it  and we also set default values 
    */
    orderDelivery: function ({starterMenuIndex = 1, mainMenuIndex = 0, time = '20:00', address}) {
        console.log(`Order Received! ${this.starterMenu[starterMenuIndex]} and ${this.mainMenu[mainMenuIndex]} will be deliverd to ${address} at ${time}`); //  Order Received! Garlic Bread and Risotto will be deliverd to PCSIR at 22:30
    },
    



};

// call function 
restaurant.orderDelivery({
    // time: '22:30', we use default value in func
    address: 'PCSIR',
    mainMenuIndex: 2,
    starterMenuIndex: 2
})

const {name, openingHours, categories} = restaurant
console.log(name, openingHours, categories);


// TODO: Value Name Different from Property Name 
const {name: restaurantName, openingHours: hours, categories: tags} = restaurant

console.log(restaurantName, hours, tags);


/*
------------------Same Output for Both------------------
Classico Italiano 
{
  thu: { open: 12, close: 22 },
  fri: { open: 11, close: 23 },
  sat: { open: 0, close: 24 }
} 
[ 'Italian', 'Pizzeria', 'Vegetarian', 'Organic' ]

----------------------------------------
*/
// TODO: Default Value

const { menu= [], starterMenu: starters = []} = restaurant

console.log(menu, starters);
/*
------------------Output --------------

[] [ 'Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad' ]

----------------------------------------
*/

// TODO: Mutatuing Value (swap variables)

let a = 111;
let b = 999;
const obj = {a: 23, b:7, c:14};

({a, b} = obj);
console.log(a,b); // 23 7


// TODO Nested Objects

/* const {fri} = openingHours

console.log(fri); // { open: 11, close: 23 } */

const {fri: {open, close}} = openingHours

console.log(open, close); //  11  23 