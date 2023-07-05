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
    orderPasta: function (ing1, ing2, ing3) {
        console.log(`Here is your delicious pasta ${ing1}, ${ing2} and ${ing3}`);
    }, 
    orderPizza: function(mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    }


};

// 1) Destructuring

// Rest Opposite of Spread

const arr = [2, 3, 4, ...[3, 4]]; // spread we use this in RIGHT side of the assignment (=) operator

// Rest because it is on left side of = operator
const [a, b, ...others] = [1, 2, 3, 4, 5, 6, 7]

console.log(a, b, others); // 1 2 [ 3, 4, 5, 6, 7 ]
console.log(a, b, ...others); // 1 2, 3, 4, 5, 6, 7 


// Another Example use  ... on both sides

// we skip from mainMenu
// rest should always be the last element  in destructuring


// ! const [ pizza, , risotto, ...rest, bread] = [...restaurant.mainMenu, ...restaurant.starterMenu] we cannot do this

const [pizza, , risotto, ...rest] = [...restaurant.mainMenu, ...restaurant.starterMenu]
console.log(pizza, risotto, ...rest); // Pizza Risotto Focaccia Bruschetta Garlic Bread Caprese Salad


// Objects

const {
    sat,
    ...otherDays
} = restaurant.openingHours
console.log(sat); // { open: 0, close: 24 }
console.log(otherDays); // { thu: { open: 12, close: 22 }, fri: { open: 11, close: 23 } }


// 2) Functions

const add = function (...numbers) {
    // console.log(numbers);
    /* 
    OutPut
    [ 2, 3 ]
    [ 5, 4, 3, 7 ]
    [ 1, 4, 3 ]
    */

    let sum = 0 ;
    for (let i = 0; i < numbers.length; i++) {
         sum += numbers[i];
    }
    console.log(sum);

}

add(2, 3)
add(5, 4, 3, 7)
add(1, 4, 3)


const x = [25, 5 ,7];
add(...x) // use spread operator to pass value of array as seprate values

// const pizzaIngre = ['mushrooms', 'onions', 'olives', 'spincah']
// restaurant.orderPizza(...pizzaIngre)
// OR
restaurant.orderPizza('mushrooms', 'onions', 'olives', 'spincah')
/*
Output:
    mushrooms
    [ 'onions', 'olives', 'spincah' ] 
*/
restaurant.orderPizza('mushrooms') 
/*
Output:
    mushrooms
    [] 
*/