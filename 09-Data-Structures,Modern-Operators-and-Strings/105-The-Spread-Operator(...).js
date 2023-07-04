const arr = [7, 8, 9];
const badNewArr = [1, 3, arr[0], arr[1], arr[2], ]

// console.log(badNewArr);       // Output:   [1, 3, 7, 8, 9]

const newArr = [1, 2, ...arr];
console.log(newArr); // Output:   [1, 3, 7, 8, 9]
// we pass arguments to function using spread operater



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

    orderDelivery: function ({
        starterMenuIndex = 1,
        mainMenuIndex = 0,
        time = '20:00',
        address
    }) {
        console.log(`Order Received! ${this.starterMenu[starterMenuIndex]} and ${this.mainMenu[mainMenuIndex]} will be deliverd to ${address} at ${time}`);
    },
    orderPasta: function(ing1, ing2, ing3) {
        console.log(`Here is your delicious pasta ${ing1}, ${ing2} and ${ing3}`);
    }


};


const newMenu = [...restaurant.mainMenu, 'Goncci', 'Biryani'];

console.log(newMenu); // [ 'Pizza', 'Pasta', 'Risotto', 'Goncci', 'Biryani' ] 



/* TODO TWO IMP USE CASES OF SPREAD OPERATOR*/

// Copy Array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// Join 2 Arrays
const joinArray = [...restaurant.mainMenu, ...restaurant.starterMenu ]
console.log(joinArray);


// Iterables: arrays, strings , maps ,sets , Not Objects
const str = 'Jonas';
const letters = [...str, ' ', 'S.']
console.log(letters); // ['J',  'o', 'n',  'a',  's', ' ',   'S.'  ]
console.log(...str); // J o n a s



// console.log(`${...str} Schmedtmann`); // Not Gonna Work


// Real World Example
const ingredients = [
    prompt("Lets make a pasta! Ingredient 1?  "),
    prompt("Lets make a pasta! Ingredient 2?  "),
    prompt("Lets make a pasta! Ingredient 3?  "),
]; // work on browser

console.log(ingredients);


restaurant.orderPasta(ingredients[0], ingredients[1],ingredients[2]); // Old way of doing
restaurant.orderPasta(...ingredients);

// Since ES2018 the spread operator actually wokrs on objects
// Experiments with Objects

const newResturant = {founded:1998,  ...restaurant, founder: "Guiseppe"} // copy old with this new

console.log(newResturant);

// Shallow Copy 
const restaurantCopy = {...restaurant};
restaurantCopy.name = "Cheezious";
console.log(restaurantCopy.name, restaurant.name);

