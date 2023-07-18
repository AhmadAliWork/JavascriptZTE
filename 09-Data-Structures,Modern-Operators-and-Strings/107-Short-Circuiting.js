 // && and __

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
  


 // Use Any Data Type, return Any data type, short-circuiting

 // Or Returns First truthy value 

 console.log("-------------OR----------"); 
 console.log(3 || "Ahmad"); 
 console.log("" || "Ahmad" );
 console.log(true || 0 );
 console.log(undefined || null );
 console.log(undefined || null || 0 || '' || 'hello' || 23);

//  restaurant.numGuests = 0;
  const guest1 = restaurant.numGuests ?  restaurant.numGuests : 10
 console.log(guest1);

 const guest2 = restaurant.numGuests || 10
 console.log(guest2);

 console.log("-------------AND----------"); 
// AND return false becasue when both are true then it returns truew
 console.log(0 && 'Jonas'); // false && true = false => 0
 console.log(7 && 'Jonas'); // true && false = false => Jonas
 console.log("Hello" && 23 && null && 'Ahmad');  // true && true && false && true = false => Null


 restaurant.orderPizza && restaurant.orderPizza("Mashrrom", "Cheeze")