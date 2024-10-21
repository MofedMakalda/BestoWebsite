// // Importing images
// import specialBg from "../assets/background/special.jpg";
// import burgerBg from "../assets/background/burger.jpg";
// import drinksBg from "../assets/background/drink.jpg";
// import sandwishBg from "../assets/background/sandwish.jpg";
// import Appetizers from "../assets/background/Appetizers.png";
// import Tortilla from "../assets/background/Tortilla.png";
// import hotdog from "../assets/MainPic/sandwishes/hotdog.jpg";


// // Define MenuItem and Category interfaces
// export interface MenuItem {
//   title: string;
//   image: string;
// }

// export interface Category {
//   title: string;
//   items: MenuItem[];
//   backgroundImage: string;
// }

// // Exporting the categories data
// export const EnglishCategories: Category[] = [
//   {
//     title: "Besto’s specials",
//     items: [
//       { title: "Brothers Package (2 people)", image: hotdog },
//       { title: "Friends Package (3 people)", image: hotdog },
//       { title: "Family Package (4 people)", image: hotdog },

//     ],
//     backgroundImage: specialBg,
//   },
//   {
//     title: "Burgers",
//     items: [
//       { title: "Besto's Burger (With mushrooms)", image: hotdog },
//       { title: "Classic Burger 160g", image: hotdog },
//       { title: "Smash Burger 200g", image: hotdog },
//       { title: "Smash Burger 300g", image: hotdog },
//       { title: "Crispy chicken burger ", image: hotdog },
//       { title: "Shnitzel burger", image: hotdog },

//     ],
//     backgroundImage: burgerBg,
//   },
//   {
//     title: "Tortilla roll",
//     items: [
//       { title: "Chick fillet", image: hotdog },
//       { title: "Cheese chick fillet", image: hotdog },
//       { title: "Mushroom chick fillet", image: hotdog },
//       { title: "Shnitzel roll", image: hotdog },

//     ],
//     backgroundImage: Tortilla,
//   },
//   {
//     title: "Sandwiches",
//     items: [
//       { title: "Shnitzel Sandwich ", image: hotdog },
//       { title: "Chick fillet Sandwich ", image: hotdog },
//       { title: "Omlet Sandwich ", image: hotdog },
//       { title: "Tuna Sandwich ", image: hotdog },
//       { title: "Yellow Cheese Sandwich ", image: hotdog },
//       { title: "White cheese Sandwich ", image: hotdog },
//       { title: "Pastrami Sandwich ", image: hotdog },
//       { title: "Salami Sandwich ", image: hotdog },
//     ],
//     backgroundImage: sandwishBg,
//   },
//   {
//     title: "Appetizers",
//     items: [
//       { title: "Chicken wings", image: hotdog },
//       { title: "Besto’s Nuggets", image: hotdog },
//       { title: "Crispy sticks", image: hotdog },
//       { title: "Mix for 1", image: hotdog },
//       { title: "Dbl mix (for 2)", image: hotdog },
//       { title: "Trio mix(for 3)", image: hotdog },
   
//     ],
//     backgroundImage: Appetizers,
//   },
//   {
//     title: "Drinks",
//     items: [
//       { title: "Cheesecake", image: hotdog },
//       { title: "Chocolate", image: hotdog },
//     ],
//     backgroundImage: drinksBg,
//   },
// ];
// Importing images
import specialBg from "../assets/background/special.jpg";
import burgerBg from "../assets/background/burger.jpg";
import drinksBg from "../assets/background/drink.jpg";
import sandwishBg from "../assets/background/sandwish.jpg";
import Appetizers from "../assets/background/Appetizers.png";
import Tortilla from "../assets/background/Tortilla.png";
import hotdog from "../assets/MainPic/sandwishes/hotdog.jpg";

//Burgers
//MushroomBurger
import mushroomBurgerMain from "../assets/MainPic/Mushroomburger/Main.png"
import mushroomBurger1 from "../assets/MainPic/Mushroomburger/1.jpg"
import mushroomBurger2 from "../assets/MainPic/Mushroomburger/2.jpg"
import mushroomBurger3 from "../assets/MainPic/Mushroomburger/3.jpg"
import mushroomBurger4 from "../assets/MainPic/Mushroomburger/4.jpg"
import mushroomBurger5 from "../assets/MainPic/Mushroomburger/5.jpg"
import mushroomBurger6 from "../assets/MainPic/Mushroomburger/6.jpg"

//Shnitzel Burger
import shnitselBurgerMain from "../assets/MainPic/shnetselBurger/main.png"
import shnetselBurger1 from "../assets/MainPic/shnetselBurger/1.jpg"
import shnetselBurger2 from "../assets/MainPic/shnetselBurger/2.jpg"
import shnetselBurger3 from "../assets/MainPic/shnetselBurger/3.jpg"
import shnetselBurger4 from "../assets/MainPic/shnetselBurger/4.jpg"
import shnetselBurger5 from "../assets/MainPic/shnetselBurger/5.jpg"
import shnetselBurger6 from "../assets/MainPic/shnetselBurger/6.jpg"
import shnetselBurger7 from "../assets/MainPic/shnetselBurger/7.jpg"




// Define MenuItem and Category interfaces
export interface MenuItem {
  title: string;
  images: string[];
}

export interface Category {
  title: string;
  items: MenuItem[];
  backgroundImage: string;
}

// Exporting the categories data
export const EnglishCategories: Category[] = [
  {
    title: "Besto’s specials",
    items: [
      { title: "Brothers Package (2 people)", images: [hotdog] },
      { title: "Friends Package (3 people)", images: [hotdog] },
      { title: "Family Package (4 people)", images: [hotdog] },
    ],
    backgroundImage: specialBg,
  },
  {
    title: "Burgers",
    items: [
      { title: "Besto's Burger (With mushrooms)", images: [mushroomBurgerMain,mushroomBurger1, mushroomBurger2, mushroomBurger3, mushroomBurger4,mushroomBurger5, mushroomBurger6 ] },
      { title: "Classic Burger 160g", images: [hotdog] },
      { title: "Smash Burger 200g", images: [hotdog] },
      { title: "Smash Burger 300g", images: [hotdog] },
      { title: "Crispy chicken burger", images: [hotdog] },
      { title: "Shnitzel burger", images: [shnitselBurgerMain,shnetselBurger1,shnetselBurger2,shnetselBurger3,shnetselBurger4,shnetselBurger5, shnetselBurger6,shnetselBurger7] },
    ],
    backgroundImage: burgerBg,
  },
  {
    title: "Tortilla roll",
    items: [
      { title: "Chick fillet", images: [hotdog] },
      { title: "Cheese chick fillet", images: [hotdog] },
      { title: "Mushroom chick fillet", images: [hotdog] },
      { title: "Shnitzel roll", images: [hotdog] },
    ],
    backgroundImage: Tortilla,
  },
  {
    title: "Sandwiches",
    items: [
      { title: "Shnitzel Sandwich", images: [hotdog] },
      { title: "Chick fillet Sandwich", images: [hotdog] },
      { title: "Omlet Sandwich", images: [hotdog] },
      { title: "Tuna Sandwich", images: [hotdog] },
      { title: "Yellow Cheese Sandwich", images: [hotdog] },
      { title: "White cheese Sandwich", images: [hotdog] },
      { title: "Pastrami Sandwich", images: [hotdog] },
      { title: "Salami Sandwich", images: [hotdog] },
    ],
    backgroundImage: sandwishBg,
  },
  {
    title: "Appetizers",
    items: [
      { title: "Chicken wings", images: [hotdog] },
      { title: "Besto’s Nuggets", images: [hotdog] },
      { title: "Crispy sticks", images: [hotdog] },
      { title: "Mix for 1", images: [hotdog, hotdog] },
      { title: "Dbl mix (for 2)", images: [hotdog] },
      { title: "Trio mix (for 3)", images: [hotdog] },
    ],
    backgroundImage: Appetizers,
  },
  {
    title: "Drinks",
    items: [
      { title: "Cheesecake", images: [hotdog] },
      { title: "Chocolate", images: [hotdog] },
    ],
    backgroundImage: drinksBg,
  },
];
