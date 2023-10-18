const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenzo, Italy",
  categories: ["Italian", "Pizzeria", "Vegeterian", "Organic"],
  StarterMenu: ["Focacciao", "Bruchetta", "Garlic Bread", "Caprese Salad"],
  MainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thursday: {
      open: 12,
      close: 22,
    },
    friday: {
      open: 11,
      close: 23,
    },
    saturday: {
      open: 0, //Open @24 Hours
      close: 24,
    },
  },
  order: function (starterIndex, mainMenuIndex) {
    return [this.StarterMenu[starterIndex], this.MainMenu[mainMenuIndex]];
  },
  //   orderDelivery:function(obj){
  //     console.log(obj)
  //   }
  orderDelivery: function ({
    mainMenuIndex = 0,
    starterIndex = 1,
    address,
    time = "20:00",
  }) {
    console.log(
      `Order received! ${this.StarterMenu[starterIndex]} and ${this.MainMenu[mainMenuIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function ({ing1, ing2, ing3}) {
    console.log(`Here is your Delicious pasta With ${ing1},${ing2} & ${ing3} `);
  },
};
//order is NOT Required to be same
// we had not Passed 4 Argurments instead to  4 arguments we used One A object and with the help of destructuring
// We had used the Default Values

restaurant.orderDelivery({
  time: "23:30",
  address: "Via de Sole, 21",
  mainMenuIndex: 2,
  starterIndex: 2,
});
restaurant.orderDelivery({
  starterIndex: 1,
  address: "Suncity, Sector 56, Gurugram",
});

//////////////////////////////////////////////////////////////////////////////////
// DeStructuring Arrays
const arr = [2, 3, 4];

const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

//for taking the values of first and third
const [first, , second] = restaurant.categories;
console.log(first, second);

//if restaurant want to switch the categories
let [main, , secondary] = restaurant.categories;
[main, secondary] = [secondary, main];
console.log(main, secondary);

//without destructuring

// const temp=main
// main=secondary
// secondary=temp

//Received two return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//nested Destructuring

const nested = [2, 3, [5, 6]];
// const [i,,j]=nested
// console.log(i,j)

const [i, , [j, k]] = nested;
console.log(i, j, k);

//Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

//////////////////////////////////////////////////////////////////////
//Destructuring Objects

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//Default values
// const{menu,starters}=restaurant //undefined undefined
const { menu = [], StarterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//Mutating the variables
let d = 999;
let e = 111;
const obj = { d: 23, e: 7, f: 14 };
//{ d, e } = obj;  ====> Syntax Error Use Parenthesis or bracket
({ d, e } = obj);
console.log(d, e);

//Nested Objects
// const {friday}=openingHours;
// console.log(friday)
// const {friday:{open,close}}=openingHours
// console.log(open,close)
const {
  friday: { open: op, close: cl },
} = openingHours;
console.log(op, cl);

///////////////////////////////////////////////////////
//Spread Operator
const arrray = [7, 8, 9];
const badArray = [1, 2, arrray[0], arrray[1], arrray[2]];
console.log(badArray);

const goodArray = [1, 2, ...arrray];
console.log(goodArray);
const goodArray1 = [...arrray, 1, 2];
console.log(goodArray1);
console.log(...goodArray1);

const newMenu = [...restaurant.MainMenu, "Gnocci"];
console.log(newMenu);

//Join 2 Array
const totalMenu = [...restaurant.MainMenu, ...restaurant.StarterMenu];
console.log(totalMenu);

//Iterables: Arrays, Strings , Maps, NOT OBJECT
const str = "Jonas";
const letters = [...str, " ", "S."];
console.log(letters);
// NOT Possilble console.log(`${...str} Sheme`)

//ordering By Prompt Window
const ingredients = [
  prompt(`Let's make pasta ! Ingredient 1?`),
  prompt(`Ingredient 2`),
  prompt(`Ingredient 3`),
];
console.log(ingredients);

restaurant.orderPasta(ingredients[0],ingredients[1],ingredients[2])
/////OR
restaurant.orderPasta(...ingredients)    

//Objects
const newRestaurant={foundIn:1999,...restaurant,founder:'Divyansh'}
console.log(newRestaurant)

const restaurantCopy={...restaurant}
restaurantCopy.name="Ristorante Roma"
console.log(restaurantCopy.name)
console.log(restaurant.name)










///////Styling the Things and Working Site